import { changePost, sendPost } from "../../Redux/newsReducer";
import News from "./News";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ...state.news,
    ...state.profile,
  };
};

const mapDispatchToProps = {
  changePost,
  sendPost,
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
