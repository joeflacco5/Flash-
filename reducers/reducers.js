// Reducer for just the cards property of the state.
// Cards property is an array.
export const cards = ( state, action ) => {
  switch (action.type) {
    case "RECEIVE_DATA":
    return action.data.cards || state;

    case "ADD_CARD":
    let newCard = Object.assign({}, action.data, {
      score: 1,
      id: moment().format()
    });
    return state.concat([newCard]);

    case "UPDATE_CARD":
    let cardUpdate = action.data;
    return state.map(card => (card.id !== cardUpdate.id) ?
      card :
      Object.assign({}, card, cardUpdate );
    );

    case "DELETE_CARD":
    return state.filter( c => c.id !== action.data

    default:
    return state || [];
  }
};

export const decks = (state, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
    return action.data.decks || state; 
    case "ADD_DECK":
    let newDeck = { name: action.data, id: moment().format()};
      return state.concat([newDeck]);
      default: return state || []
}
}

export const addingDeck = (state, action) => {
  switch (action.type) {
    case "SHOW_ADD_DECK": return true;
    case "HIDE_ADD_DECK": return false;
    default: return state || false;
  }
}
