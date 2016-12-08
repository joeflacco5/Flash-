import {createStore, combineReducers} from 'redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import moment from 'moment';
import * as reducers from './reducers/reducers';
reducers.routing = routerReducer;
import {Route, Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import VisibleCards from './components/visiblecards';
import App from './components/main';
import * as localStore from './localstore';
import NewCardModal from './components/newcardmodal';
import EditCardModal from './components/editcardmodal';
import StudyModal from './components/studymodal'; 

console.log("Hello React and Redux!");

// State Shape. { cards: [{}, {}, {}], decks: [{}, {}, {}] } : Top level properties.
// (As many Top Level Properties as possible, Reducer for each!)

const store = createStore(combineReducers(reducers), localStore.getLocalStore(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(browserHistory, store);



function run() {
  let state = store.getState();
  localStore.setLocalStore(state, ['decks', 'cards']);
ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='/deck/:deckId' component={VisibleCards}>
        <Route path='/deck/:deckId/new' component={NewCardModal}/>
        <Route path='/deck/:deckId/edit/:cardId' component={EditCardModal}/>
        <Route path='/deck/:deckId/study' component={StudyModal}/>
      </Route>
    </Route>
  </Router>
  </Provider> , document.getElementById('root'));
}

run();
store.subscribe(run);
