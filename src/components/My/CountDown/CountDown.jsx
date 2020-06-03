import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Type from 'prop-types';
import './CountDown.css';

const CountDown = ({ date }) => {

  const [state, setState] = useState({
    diffDateTime: {
      days: 0,
      hours: 0,
      mins: 0,
      // seconds: 0
    },
  })

  const leadZero = num => {
    const temp = `${num}`;
    if (temp.length === 1) {
      return `0${temp}`;
    }
    return temp;
  };

  const calcDiff = () => {
    const diff = moment(date).diff(moment());

    const diffDateTime = {
      days: leadZero(Math.floor(diff / 1000 / 60 / 60 / 24)),
      hours: leadZero(Math.floor((diff / 1000 / 60 / 60) % 24)),
      mins: leadZero(Math.floor((diff / 1000 / 60) % 60)),
      // seconds: leadZero(Math.floor((diff / 1000) % 60))
    };

    setState({ ...state, diffDateTime });
  };

  let timer;

  useEffect(() => {
    calcDiff();
    timer = setInterval(() => {
      calcDiff();
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  const { days, hours, mins } = state.diffDateTime;

  return (
    <div className="CountDown">
      <div className="CountDown_section">
        <div className="CountDown_section_column">
          <span className="CountDown_section_column_days">{days}</span>
          <span className="CountDown_section_column_title">Дни</span>
        </div>
      </div>

      <div className="CountDown_section">
        <div className="CountDown_section_column">
          <span className="CountDown_section_column_separator">:</span>
          {/* <span className="CountDown_section_column_titleSeparator" /> */}
        </div>
      </div>

      <div className="CountDown_section">
        <div className="CountDown_section_column">
          <span className="hours">{hours}</span>
          <span className="CountDown_section_column_title">Часы</span>
        </div>
      </div>

      <div className="CountDown_section">
        <div className="CountDown_section_column">
          <span className="CountDown_section_column_separator">:</span>
          {/* <span className="CountDown_section_column_titleSeparator" /> */}
        </div>
      </div>

      <div className="CountDown_section">
        <div className="CountDown_section_column">
          <span className="mins">{mins}</span>
          <span className="CountDown_section_column_title">Мин</span>
        </div>
      </div>
    </div>
  );
}

CountDown.propTypes = {
  date: Type.string.isRequired,
};

export default CountDown;
