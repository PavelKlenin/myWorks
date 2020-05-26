import { changeMessage, sendMessage } from "../../Redux/dialogsReducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

const mapDispatchToProps = {
  changeMessage,
  sendMessage,
};
const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;
