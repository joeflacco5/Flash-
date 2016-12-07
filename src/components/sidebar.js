import React, {Component} from 'react';

class Sidebar extends Component{
  constructor(props) {
    super(props);
  }
  createDeck(e) {
    if (evt.which !== 13) return;
    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name)

  }
  render() {
    let props = this.props;
    return (<div className='sidebar'>
    <h2> All Decks </h2>
    <ul>
      {props.decks.map((deck, i) => <li key={i}>{deck.name}</li>
  )}
    </ul>
    {props.addingDeck && <input ref='add' onKeyPress={this.createDeck} />}
    <button onClick={ e => this.props.showAddDeck()}>New Deck</button>
    </div>)
  }
}

export default Sidebar;

// accessing decks and addingDeck through props.
