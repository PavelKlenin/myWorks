import { sendPost, updatePostText } from "../../Redux/postsReducer";
import News from "./News";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { checkPost } from "../../Redux/formValidateReducer";
import { selectPosts, selectNewPostText } from './../../Redux/selectors/postsSelector';
import { selectUserAvatar } from "../../Redux/selectors/profileSelector";
import { selectPostForm } from "../../Redux/selectors/formSelector";

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state),
    newPostText: selectNewPostText(state),
    avatar: selectUserAvatar(state),
    newPostForm: selectPostForm(state),
  };
};
const mapDispatchToProps = {
  sendPost,
  updatePostText,
  checkPost,
};

const NewsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(News);

export default NewsContainer;
