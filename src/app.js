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

const store = createStore(combineReducers({
  cards
}));

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
ReactDOM.render(<App> <Sidebar decks={[ {name: 'Deck 1'} ]} addingDeck={true} /></App> , document.getElementById('root'));
// {this.props.children}
