import { sendPost, updatePostText } from "../../Redux/newsReducer";
import News from "./News";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { checkPostBtn, checkPostLength } from "../../Redux/formValidateReducer";

const mapStateToProps = (state) => {
  return {
    ...state.news,
    ...state.profile,
    newPostForm: state.myForm.newPostForm,
  };
};
const mapDispatchToProps = {
  sendPost,
  updatePostText,
  checkPostBtn,
  checkPostLength,
};

const NewsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(News);

export default NewsContainer;
