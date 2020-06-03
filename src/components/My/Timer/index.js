import React from 'react';
import './styles.scss';
import Oval from '../../../theme/images/oval.svg';

export default function Timer() {
  return (
    <div className="timer-wrap">
      <div className="timer-wrap-values">
        02
        <span className="timer-wrap-separator">:</span>
        10
        <span className="timer-wrap-separator">:</span>
        42
      </div>
      <div className="timer-wrap-description">
        Дни
        <img className="dot-orange" src={Oval} alt="" />
        Часы
        <img className="dot-orange" src={Oval} alt="" />
        Минуты
      </div>
    </div>
  );
}
