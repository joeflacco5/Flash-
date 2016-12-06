import {createStore, combineReducers} from 'redux';
import React from 'react';
import moment from 'moment'; 

console.log("Hello React and Redux!");

const store = createStore(function(state, action) {
  switch (action.type) {
    case "ADD_CARD":
    let newCard = Object.assign({}, action.data, {
      score: 1,

    })
  }
})
