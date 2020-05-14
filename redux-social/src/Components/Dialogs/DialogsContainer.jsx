import {
  changeMessage,
  sendMessage,
} from "../../Redux/dialogsReducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

const mapDispatchToProps = {
  changeMessage,
  sendMessage,
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
