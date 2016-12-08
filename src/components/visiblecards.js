import React from 'react';
import Card from './card';
import { connect } from 'react-redux';

const mapStateToProps = ( { cards }, { params: { deckId } } ) => ({
  cards: cards.filter( c => c.deckId === deckId )
  // filter cards so we only have the cards with the same id as what we get in the url.
});

const VisibleCards = ( {cards, children} ) => {
  return (<div className='main'>
  {cards.map(card => <Card card={card} key={card.id} /> )}
  { children }
  </div>);
};

export default connect(mapStateToProps)(VisibleCards);
