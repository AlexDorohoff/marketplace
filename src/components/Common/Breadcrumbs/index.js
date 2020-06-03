import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';
import connectorCourses from '../../../core/connectors/courses';
import connectorTeachers from '../../../core/connectors/teachers';

/**
 * Breadcrumbs
 */
function Breadcrumbs({ items = [], className, getCoursesByTitle, getTeachersByTitle }) {
  const classes = classNames('breadcrumbs', className);
  return (
    <div className={classes}>
      <ul className="list">
      {items.map((item) => (
        <li key={`${item.title}${Math.random()}`}>
          {item.link
            ? <Link className="link link_secondary" key={item.link} to={item.link} onClick={() => {getCoursesByTitle(); getTeachersByTitle()}}>{item.title} </Link>
            : <span key={item.link}>{item.title}</span>
          }
        </li>
      ))}
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: Type.array.isRequired,
  className: Type.string,
};

Breadcrumbs.defaultProps = {
  className: '',
};

export default connectorTeachers(connectorCourses(Breadcrumbs));
