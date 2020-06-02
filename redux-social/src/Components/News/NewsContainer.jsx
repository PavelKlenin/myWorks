import { sendPost } from "../../Redux/newsReducer";
import News from "./News";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    ...state.news,
    ...state.profile,
  };
};

const mapDispatchToProps = {
  sendPost,
};

const NewsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(News);

export default NewsContainer;
