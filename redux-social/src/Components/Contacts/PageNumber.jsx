import React from "react";
import s from './Contacts.module.css';

const PageNumber = (props) => {
  const {pageNumber, currentPage} = props;
  
  const changePage = (number) => {
    props.changePage(number);
  };

  return (
    <div
      className={`${s.pageNumber} ${pageNumber === currentPage && s.currentPage}`}
      onClick={() => {
        changePage(pageNumber);
      }}
    >
      {pageNumber}
    </div>
  );
};

export default PageNumber;
