const Redux = require("redux");

const store = Redux.createStore(reducer);

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};


console.log(store.getState());

//{ login: false, email: '' }