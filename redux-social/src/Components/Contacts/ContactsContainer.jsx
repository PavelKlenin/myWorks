import React from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";
import {
  toggleFollow,
  getContacts,
  getContactsCount,
  changePage,
  toggleFetching,
} from "../../Redux/contactsReducer";
import { API } from "../../api/api";

class ContactsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    API.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleFetching(false);
      this.props.getContacts(data.items);
      this.props.getContactsCount(data.totalCount);
    });
  }

  loadContacts = (pageNumber) => {
    this.props.toggleFetching(true);
    this.props.changePage(pageNumber);
    API.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleFetching(false);
      this.props.getContacts(data.items);
    });
  };

  toggleFollow = (userId) => {
    API.checkFollow(userId).then((data) => {
      data
        ? API.unfollow(userId).then((data) => {
            if (data.resultCode === 0) {
              this.props.toggleFollow(userId);
            }
          })
        : API.follow(userId).then((data) => {
            if (data.resultCode === 0) {
              this.props.toggleFollow(userId);
            }
          });
    });
  };

  render() {
    return (
      <Contacts
        isFetching={this.props.isFetching}
        users={this.props.users}
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
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
  toggleFollow,
  getContacts,
  getContactsCount,
  changePage,
  toggleFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
