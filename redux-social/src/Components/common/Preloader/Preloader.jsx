import React from 'react';
import preloader from "../../../assets/img/svg/preloader.svg";
import s from './Preloader.module.css';


const Preloader = () => {
  return <img className={s.loader} src={preloader} alt="loader" />
}

export default Preloader;