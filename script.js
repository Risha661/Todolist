const todoForm = document.querySelector('#form-todo');
console.log(todoForm);
const author = document.getElementById('author');
const post= document.getElementById('post');
const todoTitle = document.querySelector('.todo__title');
const list = document.querySelector('.todo__list');
const todoCount = document.querySelector('.todo__count');

const base = {
  employee: "Петров Сергей Олегович",
  todo: getTodoLS(),
  check: function(id) {
    for (let i = 0;i < base.todo.length; i++) {
      if (base.todo[i].id ===id) {
        base.todo[i].ready = true;
      }
    }
  },
  addTodo(author, post) {
    const todo = {
      id: 'td' + (Date.now()),
      author,
      post,
      ready: false,
    };
    base.todo.push(todo);
    console.log(base.todo);

    return todo;
  },
  remove(id) {
    base.todo = base.todo.filter(item => item.id !== id);
  }
};

function addTodo(event) {
  event.preventDefault();
  const authorText = author.value;
  const postText = post.value;

  const objTodo = base.addTodo(authorText, postText);
  const todoLi = createTodo(objTodo);

  list.append(todoLi);
  setTodoLS();
  todoForm.reset();
}

function createTodo(objTodo) {
  const todoItem = `
    <article class="post ${objTodo.ready ? 'post_complete' : ''}">
      <h3 class="post__author">${objTodo.author}</h3>
      <p class="post__todo">${objTodo.post}</p>
      ${!objTodo.ready ?
        `<button 
            class="post__ready" 
            type="button"
            data-id="${objTodo.id}">✔</button>` :
        `<button 
            class="post__remove" 
            type="button"
            data-id="${objTodo.id}">❌</button>`
      }
    </article>
  `;

  const li = document.createElement('li');
  li.classList.add('todo__list-item');
  li.innerHTML = todoItem;
  console.log(li);
  return li;
}

function renderTodo() {
  for (let i = 0;i < base.todo.length; i++) {
    const todoLi = createTodo(base.todo[i]);
    list.append(todoLi);
    todoCount.textContent = base.todo.length;
  }
}

function checkTodo(event) {
  const btnReady = event.target.closest('.post__ready');
  const btnRemove = event.target.closest('.post__remove');

  if (btnReady) {
    const post = btnReady.closest('.post');
    btnReady.remove();
    post.classList.add('post_complete');
    const id = btnReady.dataset.id;
    base.check(id);
    setTodoLS();
    
    const removeButton = document.createElement('button');
    removeButton.classList.add('post__remove');
    removeButton.type = 'button';
    removeButton.dataset.id = id;
    removeButton.textContent = '❌';
    post.appendChild(removeButton);
    
  } else if (btnRemove) {
    const id = btnRemove.dataset.id;
    base.remove(id);
    setTodoLS();
    btnRemove.closest('.todo__list-item').remove();
  }
}

function getTodoLS() {
  if (localStorage.getItem('todo')) {
    return JSON.parse(localStorage.getItem('todo'));
  } else {
    return [];
  }
}

const setTodoLS = () => {
  localStorage.setItem('todo', JSON.stringify(base.todo));
};

const removeItemStorage = () => {
  const currentTodos = getTodoLS();
  const newData = currentTodos.filter(item => item.id !== itemId);
  setTodoLS(newData);
  console.log(newData);
};

renderTodo();

todoForm.addEventListener('submit', addTodo);
list.addEventListener('click', checkTodo);