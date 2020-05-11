import React from "react";
import s from './Contacts.module.css';

const PageNumber = (props) => {
  const changePage = (number) => {
    props.changePage(number);
  };

  return (
    <div
      className={`${s.pageNumber} ${props.number === props.currentPage && s.currentPage}`}
      onClick={() => {
        changePage(props.number);
      }}
    >
      {props.number}
    </div>
  );
};

export default PageNumber;
