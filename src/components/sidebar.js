import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions/actions';
import {Link} from 'react-router';

/*
Properties that are data: (mapStateToProps)

decks={state.decks}
addingDeck={state.addingDeck} */

// converts State to Props for presentational components.
// Returns an Object.

const mapStateToProps = ({decks, addingDeck}) => ({
  decks,
  addingDeck
})

/* Properties that are functions to call: (mapDispatchToProps)

addDeck={name => store.dispatch(addDeck(name))}
showAddDeck={() => store.dispatch(showAddDeck())}
hideAddDeck={() => store.dispatch(hideAddDeck())} */

// Returns an Object.

const mapDispatchToProps = (dispatch) => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
})

const Sidebar = React.createClass({
  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this.refs.add);
    if (el) el.focus();
  },
  render() {
    let props = this.props;
    return (<div className='sidebar'>
    <h2> All Decks </h2>
    <ul>
      {props.decks.map((deck, i) => <li key={i}>
      <Link to={`/deck/${deck.id}`}>{deck.name}</Link></li>
  )}
    </ul>
    {props.addingDeck && <input ref='add' onKeyPress={this.createDeck} />}
    </div>)
  },
  createDeck(e) {
    if (e.which !== 13) return;
    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
