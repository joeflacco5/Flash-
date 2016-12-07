import React, {Component} from 'react';

class Sidebar extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;
    return (<div className='sidebar'>
    <h2> All Decks </h2>
    <ul>
      {props.decks.map((deck, i) => <li key={i}>{deck.name}</li>
  )}
    </ul>
    {props.addingDeck && <input ref='add' />}
    </div>)
  }
}

export default Sidebar;

// accessing decks and addingDeck through props. 
