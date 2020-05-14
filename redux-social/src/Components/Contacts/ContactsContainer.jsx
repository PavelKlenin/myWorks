import React from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";
import * as axios from "axios";
import {
  toggleFollow,
  getContacts,
  getContactsCount,
  changePage,
  toggleFetching,
} from "../../Redux/contactsReducer";

class ContactsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.getContacts(response.data.items);
        this.props.getContactsCount(response.data.totalCount);
      });
  }

  loadContacts = (pageNumber) => {
    this.props.toggleFetching(true);
    this.props.changePage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.getContacts(response.data.items);
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
        toggleFollow={this.props.toggleFollow}
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
