import { connect } from "react-redux";
import Contacts from "./Contacts";
import { toggleFollowAC, getContactsAC, getContactsCountAC, changePageAC } from "../../Redux/contactsReducer";

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
    getContactsCount: (count) => {
      dispatch(getContactsCountAC(count));
    },
    changePage: (number) => {
      dispatch(changePageAC(number));
    }
  };
};
const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

export default ContactsContainer;
