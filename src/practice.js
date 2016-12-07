import {createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({
  decks,
  addDeck
}))

const decks = (state, action) => {
  switch (action.type) {
    case "ADD_DECK":
    let newDeck = {name: action.data, id: new Date()};
    return state.concat([newDeck]);
    default: state || []
  }
}

const addDeck = (name) => ({type: "ADD_DECK", data: name});

const deckVisibility = ( state, action ) => {
  switch (action.type) {
    case "SHOW_ADD_DECK": return true;
    case "HIDE_ADD_DECK": return false;
    default: state || false;
  }
}

const showAddDeck = () => ({ type: "SHOW_ADD_DECK" })
const hideAddDeck = () => ({ type: "HIDE_ADD_DECK" })


class Sidebar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let props = this.props;
    return(<div className="sidebar">
    <h2>All Decks</h2>
    <ul>
    {props.decks.map((deck, i) => <li key={i}>{deck.name}</li>)}
    </ul>
    {props.addDeck && <input ref='add' />}
  </div>)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props.children;
    return (<div className='main'>
    {props}
  </div>)
  }
}


ReactDOM.render(<App> <Sidebar decks={state.decks} addDeck={state.deckVisibility} /> </App>, document.getElementById('root'));
