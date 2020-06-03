import React from 'react';
import { NavLink } from 'react-router-dom';
import Plate from 'arui-feather/plate';
import './styles.scss';
import { useSelector } from 'react-redux';
import Type from 'prop-types';
import config from '../../../config';
import { yearsPlural } from '../../../core/utils/common';

/**
 * Teacher block
 */
export default function TeacherBlock({ teacher }) {
  const courses = useSelector(state => state.courses.courses);

  const { name } = teacher;
  const fio = name.split(' ');

  const teacherCourses = courses.filter(
    course => course.user.id === teacher.id
  );

  return (
    <Plate className="teacher-block">
      <NavLink
        className="link link_toplink"
        to={`/teacher/${teacher.id}`}
      >
        <img
          className="flex-container"
          src={`${config.baseUrl}/avatars/${
            teacher.image
          }?${Date.now().toString()}`}
          alt={teacher.name}
        />
      </NavLink>
      <div className="teacher_skills-wrap">
        <h3 className="teacher_skills-name">
          <NavLink className="link link_toplink" to={`/teacher/${teacher.id}`}>
            <b>
            {fio[0]}
            <br />
            {fio[1]} 
            {' '}
            {fio[2]}
            </b>
          </NavLink>
        </h3>
        <p>
          <b>Стаж работы</b>
            &nbsp;
          {teacher &&
            teacher.profile &&
            yearsPlural(teacher.profile.experience)}
          <p className="teacher_skills-subject">О себе</p>
          {teacher && teacher.profile && teacher.profile.yourself}
        </p>

      </div>
    </Plate>
  );
}

TeacherBlock.propTypes = {
  teacher: Type.object.isRequired,
};
