import {createStore, combineReducers} from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import moment from 'moment';
import Sidebar from './components/sidebar';
import * as reducers from './reducers/reducers';
reducers.routing = routerReducer;
import {Route, Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

console.log("Hello React and Redux!");

// State Shape. { cards: [{}, {}, {}], decks: [{}, {}, {}] } : Top level properties.
// (As many Top Level Properties as possible, Reducer for each!)

const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    let props = this.props.children
    return (<div className='app'>
    <Sidebar />
    {props}
  </div>);
  }
}

function run() {
  let state = store.getState();
ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App}></Route>
  </Router>
  </Provider> , document.getElementById('root'));
}

run();
store.subscribe(run);
