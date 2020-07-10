import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

/**
 * ColumChart
 */
// export default function ColumChart({ items = [], className }) {
export default function ColumChart({ items = [] }) {
  // const classes = classNames('columchart', className);
  // const classes = classNames('columchart');
  return (
    // <div className={classes}>
    // <div className='columchart'>
    <div>
      <ul className="">
        {items.map(item => (
          <li key={`${item.title}${Math.random()}`}>
            {item.link ? (
              <Link
                className="link"
                key={item.link}
                to={item.link}
              >
                <b>{item.title}</b>
              </Link>
            ) : (
              <Link
                // className="link5 link5_chart"
                className="link6 link6_third link5_chart"
                key={item.link}
                to={item.link}
              >
                {item.title}
               
              </Link>

            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

ColumChart.propTypes = {
  items: Type.array.isRequired,
  className: Type.string,
};

ColumChart.defaultProps = {
  className: '',
};
