import React from 'react';
import {showAddDeck} from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//Of course you need to create a mapDispatchToProps !!!

const mapDispatchToProps = (dispatch) => ({
  showAddDeck: () => dispatch(showAddDeck())
})

const Toolbar = ({showAddDeck}) => {
  return (<div className='toolbar'>
  <div>
    <button onClick={showAddDeck}> Button! </button>
  </div>
  </div>)
};

// remember to connect if you are creating a container component!
export default connect(null, mapDispatchToProps)(Toolbar); 
