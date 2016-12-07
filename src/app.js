import {createStore, combineReducers} from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Sidebar from './components/sidebar';

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

const decks = (state, action) => {
  switch (action.type) {
    case "ADD_DECK":
    let newDeck = { name: action.data, id: moment().format()};
      return state.concat([newDeck]);
      default: return state || []
}
}

const addingDeck = (state, action) => {
  switch (action.type) {
    case "SHOW_ADD_DECK": return true;
    case "HIDE_ADD_DECK": return false;
    default: return state || false;
  }
};

const store = createStore(combineReducers({
  cards,
  decks,
  addingDeck
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    let props = this.props.children
    return (<div className='app'>
    {props}
  </div>);
  }
}
function run() {
  let state = store.getState();
ReactDOM.render(<App> <Sidebar decks={state.decks} addingDeck={state.addingDeck}/></App> , document.getElementById('root'));
}

run();
store.subscribe(run);

store.dispatch({type: "ADD_DECK", data: "Deck 1"})
