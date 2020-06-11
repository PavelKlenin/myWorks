import { sendMessage } from "../../Redux/dialogsReducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";
import { selectDialogContacts, selectMessages } from "../../Redux/selectors/dialogsSelector.js";

const mapStateToProps = (state) => {
  return {
    contacts: selectDialogContacts(state),
    messages: selectMessages(state),
  };
};

const mapDispatchToProps = {
  sendMessage,
};

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;
