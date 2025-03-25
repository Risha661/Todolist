const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

const setStorage = (key, object) => {
  const data = getStorage(key);
  data.push(object);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeItemStorage = (name, itemId) => {
  const data = getStorage(name);
  const newData = data.filter(item => item.id !== itemId);
  setStorage(name, (newData));
};


export {getStorage, setStorage, removeItemStorage};