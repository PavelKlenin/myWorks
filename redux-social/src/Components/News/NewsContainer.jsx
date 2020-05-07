import { changePostCreator, sendPostCreator } from "../../Redux/newsReducer";
import News from "./News";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ...state.news,
    ...state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      dispatch(changePostCreator(text));
    },
    sendPost: () => {
      dispatch(sendPostCreator());
    },
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
