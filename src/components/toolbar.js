import React from 'react';
import {showAddDeck} from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const Toolbar = ({showAddDeck}) => {
  return (<div className='toolbar'>
  <div>
    <button onClick={showAddDeck}> Button! </button>
  </div>
  </div>)
}; 
