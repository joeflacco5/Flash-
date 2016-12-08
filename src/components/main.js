import { connect } from 'react-redux';
import Sidebar from './sidebar';
import React from 'react';
import Toolbar from './toolbar';

// second parameter is router Destructured.
const mapStateToProps = (props, {params: {deckId} }) => ({
  deckId
});

const App = ({deckId, children}) => {
    return (<div className='app'>
    <Toolbar deckId={deckId} />
    <Sidebar />
    {children}
  </div>);
  }

export default connect(mapStateToProps)(App);
