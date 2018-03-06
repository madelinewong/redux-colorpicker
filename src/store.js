import { createStore } from 'redux';
  //creation of the store
  const store = createStore(
    countReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;