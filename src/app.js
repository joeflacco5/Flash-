import {createStore, combineReducers} from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Sidebar from './components/sidebar';
import { addDeck, showAddDeck, hideAddDeck } from './actions/actions';
import * as reducers from './reducers/reducers';

console.log("Hello React and Redux!");

// State Shape. { cards: [{}, {}, {}], decks: [{}, {}, {}] } : Top level properties.
// (As many Top Level Properties as possible, Reducer for each!)


const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
ReactDOM.render(<App> <Sidebar decks={state.decks} addingDeck={state.addingDeck} addDeck={name => store.dispatch(addDeck(name))}/></App> , document.getElementById('root'));
}

run();
store.subscribe(run);
