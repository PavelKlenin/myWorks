import React from 'react';
import preloader from "../../../assets/img/svg/preloader.svg";
import s from './Preloader.module.css';


//TODO сделать общий preloader на весь экран с затемнением

const Preloader = () => {
  return (
    <div className={s.loaderShadow}>
      <img className={s.loader} src={preloader} alt="loader" />
    </div>
  ) 
}

export default Preloader;