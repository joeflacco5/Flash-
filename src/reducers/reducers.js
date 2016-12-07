// Reducer for just the cards property of the state.
// Cards property is an array.
export const cards = ( state, action ) => {
  switch (action.type) {
    case "ADD_CARD":
    let newCard = Object.assign({}, action.data, {
      score: 1,
      id: moment().format()
    });
    return state.concat([newCard])
    default:
    return state || [];
  }
}

export const decks = (state, action) => {
  switch (action.type) {
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
};
