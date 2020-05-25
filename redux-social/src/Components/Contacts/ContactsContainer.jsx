import React from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";
import {
  getUsers,
  loadPage,
  toggleFollowUser,
} from "../../Redux/contactsReducer";

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
        pageSize={this.props.pageSize}
        followingInProgress={this.props.followingInProgress}
        currentPage={this.props.currentPage}
        toggleFollow={this.toggleFollow}
        loadContacts={this.loadContacts}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.contacts };
};

const mapDispatchToProps = {
  getUsers,
  loadPage,
  toggleFollowUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
