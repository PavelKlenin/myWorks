import React, { useState, useEffect } from "react";
import s from "./Contacts.module.css";
import Contact from "./Contact";
import PageNumber from "./PageNumber";
import Preloader from "../common/Preloader/Preloader";

const Contacts = (props) => {
  const contactList = props.users.map((user) => {
    return (
      <Contact
        toggleFollow={props.toggleFollow}
        followingInProgress={props.followingInProgress}
        {...user}
        key={user.id}
      />
    );
  });

  const pagesCount = Math.ceil(props.totalUsers / props.pageSize);

  let pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers = [...pageNumbers, i];
  }

  const pagesSectionsCount = Math.ceil(
    pageNumbers.length / props.paginatorSize
  );
  const [sectionNumber, setSectionNumber] = useState(1);

  const pagesSectionLeftSide = (sectionNumber - 1) * props.paginatorSize + 1;
  const pagesSectionRightSide = props.paginatorSize * sectionNumber;

  useEffect(() => {
    props.loadContacts(pagesSectionLeftSide);
  }, [pagesSectionLeftSide]);

  const pages = pageNumbers.map((page) => {
    if (page>=pagesSectionLeftSide && page<=pagesSectionRightSide) {
      return (
        <PageNumber
          currentPage={props.currentPage}
          changePage={props.loadContacts}
          pageNumber={page}
          key={page}
        />
      );
    }
    return null
  });


  const setNextSection = () => {
    const currentSection = sectionNumber;
    setSectionNumber(currentSection + 1);
  }

  const setPrevSection = () => {
    const currentSection = sectionNumber;
    setSectionNumber(currentSection - 1);
  }



  return (
    <div className={s.contacts}>
      <div className={s.pages}>
        {sectionNumber>1 && <button onClick={setPrevSection}>prev</button>}
        {pages}
        {sectionNumber<pagesSectionsCount && <button onClick={setNextSection}>next</button>}
        </div>
      <div className={s.contactList}>
        {props.isFetching ? <Preloader /> : contactList}
      </div>
    </div>
  );
};

export default Contacts;
