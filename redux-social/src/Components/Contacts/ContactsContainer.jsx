import React from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";
import * as axios from "axios";
import {
  toggleFollowAC,
  getContactsAC,
  getContactsCountAC,
  changePageAC,
} from "../../Redux/contactsReducer";

class ContactsContainer extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.getContacts(response.data.items);
        this.props.getContactsCount(response.data.totalCount);
      });
  }

  loadContacts = (pageNumber) => {
    this.props.changePage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.getContacts(response.data.items));
  };

  render() {
    return (
      <Contacts
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (id) => {
      dispatch(toggleFollowAC(id));
    },
    getContacts: (users) => {
      dispatch(getContactsAC(users));
    },
    getContactsCount: (count) => {
      dispatch(getContactsCountAC(count));
    },
    changePage: (number) => {
      dispatch(changePageAC(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
