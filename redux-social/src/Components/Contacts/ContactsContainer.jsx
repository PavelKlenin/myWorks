import { connect } from "react-redux";
import Contacts from "./Contacts";
import { toggleFollowAC, getContactsAC } from "../../Redux/contactsReducer";

const mapStateToProps = (state) => {
  return {...state.contacts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (id) => {
      dispatch(toggleFollowAC(id))
    } ,
    getContacts: (users) => {
      dispatch(getContactsAC(users))
    },
  };
};
const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

export default ContactsContainer;
