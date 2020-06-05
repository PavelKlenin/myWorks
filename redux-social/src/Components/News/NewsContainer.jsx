import { sendPost, updatePostText } from "../../Redux/newsReducer";
import News from "./News";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { checkForm } from "../../Redux/myFormReducer";

const mapStateToProps = (state) => {
  return {
    ...state.news,
    ...state.profile,
    ...state.myForm,
  };
};
const mapDispatchToProps = {
  sendPost,
  updatePostText,
  checkForm,
};

const NewsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(News);

export default NewsContainer;
