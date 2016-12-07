import {createStore, combineReducers} from 'redux';
import React from 'react';
import moment from 'moment';

console.log("Hello React and Redux!");

// State Shape. { cards: [{}, {}, {}], decks: [{}, {}, {}] } : Top level properties.
// (As many Top Level Properties as possible, Reducer for each!)

// Reducer for just the cards property of the state.
// Cards property is an array.
const cards = ( state, action ) => {
  switch (action.type) {
    case "ADD_CARD":
    let newCard = Object.assign({}, action.data, {
      score: 1,
      id: moment().format()
    });
    return state.concat([newCard])
    default:
    return state || [];
  }
}

const store = createStore(combineReducers({
  cards
})); 

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD_CARD",
  data: {
    front: 'front',
    back: 'back'
  }
})
