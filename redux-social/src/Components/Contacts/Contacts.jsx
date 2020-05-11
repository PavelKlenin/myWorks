import React from "react";
import s from "./Contacts.module.css";
import Contact from "./Contact";
import * as axios from "axios";
import PageNumber from "./PageNumber";

class Contacts extends React.Component {
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
    const contactList = this.props.users.map((user) => {
      return (
        <Contact
          toggleFollow={this.props.toggleFollow}
          {...user}
          key={user.id}
        />
      );
    });

    const pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize / 100);
    let pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers = [...pageNumbers, i];
    }

    const pages = pageNumbers.map((page) => {
      return (
        <PageNumber
          currentPage={this.props.currentPage}
          changePage={this.loadContacts}
          number={page}
          key={page}
        />
      );
    });

    return (
      <div className={s.contacts}>
        <div className={s.pages}>{pages}</div>
        <div className={s.contactList}>{contactList}</div>
        {/* <button className={s.loadContacts} type="button" onClick={this.loadContacts}>
          Load more
        </button> */}
      </div>
    );
  }
}

export default Contacts;
