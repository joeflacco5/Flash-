import { connect } from 'react-redux';
import CardModal from './cardmodal';
import { addCard } from '../actions/actions';

// REMEMBER: ( props, { from router } );
const mapStateToProps = (props, { params: { deckId } }) => ({
  card: { deckId } // new card and we are giving it a property so we can associate.
});

const mapDispatchToProps = (dispatch) => ({
  onSave: (card) => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal); 
