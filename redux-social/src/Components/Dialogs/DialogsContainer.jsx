import { changeMessage, sendMessage } from "../../Redux/dialogsReducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

const mapDispatchToProps = {
  changeMessage,
  sendMessage,
};
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));

export default DialogsContainer;
