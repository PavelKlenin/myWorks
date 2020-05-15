import React from "react";
import s from "./Contacts.module.css";
import Contact from "./Contact";
import PageNumber from "./PageNumber";
import Preloader from "../common/Preloader/Preloader";

const Contacts = (props) => {
  const contactList = props.users.map((user) => {
    return (
      <Contact toggleFollow={props.toggleFollow} {...user} key={user.id} />
    );
  });

  const pagesCount = Math.ceil(props.totalUsers / props.pageSize / 100);

  let pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers = [...pageNumbers, i];
  }

  const pages = pageNumbers.map((page) => {
    return (
      <PageNumber
        currentPage={props.currentPage}
        changePage={props.loadContacts}
        number={page}
        key={page}
      />
    );
  });

  return (
    <div className={s.contacts}>
      <div className={s.pages}>{pages}</div>
      <div className={s.contactList}>
        {props.isFetching ? <Preloader /> : contactList} {/* //TODO Preloader стилизовать по центру экрана */}
      </div>
      {/* <button className={s.loadContacts} type="button" onClick={this.loadContacts}>
          Load more
        </button> */}
    </div>
  );
};

export default Contacts;
