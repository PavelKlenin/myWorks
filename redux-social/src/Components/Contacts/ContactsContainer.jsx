import React from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";
import {
  getUsers,
  loadPage,
  toggleFollowUser,
} from "../../Redux/contactsReducer";
import { compose } from "redux";
import {
  selectAllUsers,
  selectUsersCount,
  selectIsFetching,
  selectPageSize,
  selectFollowingInProgress,
  selectCurrentPage,
  selectPaginatorSize,
} from "./../../Redux/selectors/userSelector";

class ContactsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  loadContacts = (pageNumber) => {
    this.props.loadPage(pageNumber, this.props.pageSize);
  };

  toggleFollow = (userId) => {
    this.props.toggleFollowUser(userId);
  };

  render() {
    return (
      <Contacts
        isFetching={this.props.isFetching}
        users={this.props.users}
        totalUsers={this.props.totalUsers}
        paginatorSize={this.props.paginatorSize}
        pageSize={this.props.pageSize}
        followingInProgress={this.props.followingInProgress}
        currentPage={this.props.currentPage}
        toggleFollow={this.toggleFollow}
        loadContacts={this.loadContacts}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: selectAllUsers(state),
  totalUsers: selectUsersCount(state),
  isFetching: selectIsFetching(state),
  pageSize: selectPageSize(state),
  paginatorSize: selectPaginatorSize(state),
  followingInProgress: selectFollowingInProgress(state),
  currentPage: selectCurrentPage(state),
});

const mapDispatchToProps = {
  getUsers,
  loadPage,
  toggleFollowUser,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ContactsContainer
);
