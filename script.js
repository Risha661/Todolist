// const todoForm = document.querySelector('#form-todo');
// const author = document.getElementById('author');
// const post= document.getElementById('post');
// const todoTitle = document.querySelector('.todo__title');
// const list = document.querySelector('.todo__list');

const base = {
  employee: "Петров Сергей Олегович",
  todo: [{
    id: 'td1',
    author: 'Сергей Олегович',
    post: 'Выгрузить',
    ready: false,
  },
  {
    id: 'td2',
    author: 'Олег Олегович',
    post: 'Закончить',
    ready: true,
  },
  ],
  check: function(id) {
    console.log(id);
  },
  addTodo(author, post) {
    const todo = {
      id: 'td' + (base.todo.length +1),
      author,
      post,
      ready: false,
    };
    base.todo.push(todo);
    console.log(base.todo);
  }
};

base.check(24);
base.addTodo('Irina', 'Hello!');
