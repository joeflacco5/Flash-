import { connect } from 'react-redux';
import Sidebar from './sidebar';
import React from 'react';

// second parameter is router Destructured. 
const mapStateToProps = (props, {params: {deckId} }) => ({
  deckId
});

const App = ({deckId, children}) => {
    return (<div className='app'>
    <Sidebar />
    <h1> Deck {deckId} </h1>
    {children}
  </div>);
  }

export default connect(mapStateToProps)(App);
