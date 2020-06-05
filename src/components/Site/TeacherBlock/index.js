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
  const { name } = teacher;
  const fio = name.split(' ');

  return (
    <NavLink to={`/shop/${teacher.id}`}>
      <Plate className="teacher-block">
        <img
          className="flex-container"
          src={`${config.baseUrl}/avatars/${
            teacher.image
          }?${Date.now().toString()}`}
          alt={teacher.name}
        />

        <div className="teacher_skills-wrap">
          <h3 className="teacher_skills-name">
            <b>
              {fio[0]}
              <br />
              {fio[1]} {fio[2]}
            </b>
          </h3>
          <div>
            <p className="teacher_skills-subject">
              <b>На рынке</b>
              &nbsp;
              {teacher &&
                teacher.profile &&
                yearsPlural(teacher.profile.experience)}
            </p>
            <p className="teacher_skills-subject">
              <span className="teacher_skills-subtitle">О нас</span>
              {teacher && teacher.profile && teacher.profile.yourself}
            </p>
          </div>
        </div>
      </Plate>
    </NavLink>
  );
}

TeacherBlock.propTypes = {
  teacher: Type.object.isRequired,
};
