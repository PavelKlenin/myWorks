import { changePost, sendPost } from "../../Redux/newsReducer";
import News from "./News";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(News));

export default NewsContainer;
