import { createStore } from 'redux';
// type
export const CHANGE_COLOR = 'CHANGE_COLOR';

//actions (export those)

export const changeColor = (color) => ({
   type: CHANGE_COLOR,
   payload: {
     value: color
   }
});

//inital state

const initalState = {
  color: "color"
};

//reducer 
const reducer = (state=initalState, action) => {
  console.log(action);
  switch(action.type){
    case "CHANGE_COLOR": 
    return {
      ...state, 
      color: action.payload.value
    };
    default: 
      return state;
  }
}

  //creation of the store
  const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;