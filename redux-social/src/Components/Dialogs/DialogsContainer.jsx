import {
  sendMessageCreator,
  changeMessageCreator,
} from "../../Redux/dialogsReducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (text) => {
      const action = changeMessageCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      const action = sendMessageCreator();
      dispatch(action);
    }
  }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
