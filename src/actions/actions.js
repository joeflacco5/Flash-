// ADD_DECK : action for adding a deck!
// SHOW_ADD_DECK  : action for visibility of the textbox.
// HIDE_ADD_DECK  : action for visibility of the textbox.

// Actions in the form of objects. Fire them with Action creator functions.

export const addDeck = (name) => ({type: 'ADD_DECK', data: name});
// remember parentheses to return the object.

export const showAddDeck = () => ({type: "SHOW_ADD_DECK"});
export const hideAddDeck = () => ({type: "HIDE_ADD_DECK"});

export const addCard = (card) => ({type: "ADD_CARD", data: card});
export const updateCard = card => ({ type: "UPDATE_CARD", data: card });
export const deleteCard = cardId => ({ type: "DELETE_CARD", data: cardId});

export const filterCards = query => ({ type: "FILTER_CARDS", data: query });

export const setShowBack = back => ({ type: "SHOW_BACK", data: back });

export const receiveData = data => ({ type: "RECEIVE_DATA", data: data });

export const fetchData = () => {
  return dispatch => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => dispatch(receiveData(json)));
      // .catch(err => dispatch(failedRequest(err)));
  };
}; 
