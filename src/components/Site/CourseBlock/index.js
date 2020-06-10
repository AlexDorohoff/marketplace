import React from 'react';
import { Link } from 'react-router-dom';
import Type from 'prop-types';
import Plate from 'arui-feather/plate';
import Button from 'arui-feather/button';
import config from '../../../config';
import './styles.scss';

/**
 * Course block
 */
export default function CourseBlock({ course }) {
  const getSubject = () => {
    let res = '';
    try {
      if (course) {
        res = JSON.parse(course.description).subject;
      }
    } catch (e) {
      // console.log(e, 'courseId: ', course.id);
    }
    return res;
  };
  return (
    <Plate className="course-block">
      {/* <div className="course_skills"> */}
      <Link
        // className="link link_toplink link_image"
        className="link link_toplink"
        to={`/good/${course.id}`}
      >
        <img
          // className="teacher-image"
          className="flex-container"
          src={`${config.baseUrl}/courses/${
            course.image
          }?${Date.now().toString()}`}
          alt={course.name}
        />
      </Link>
      <div className="course_skills-wrap">
        <h3 className="course_skills-name toplink">{course.title}</h3>
        <p className="course_skills-subject">Цена, ₽</p>
        <p className="course_skills-price">
          {+course.price === 0 ? 'Бесплатно' : course.price}
        </p>
        <p className="course_skills-subject">Раздел</p>
        <div className="range1">
          <p>{getSubject()}</p>
        </div>
      </div>
      <div className="course_skills">
        <Link className="link link_third" to={`/good/${course.id}`}>
          <div className="button-cntr">
            <Button className="button button_settings-form">Подробнее</Button>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </Plate>
  );
}

CourseBlock.propTypes = {
  course: Type.object.isRequired,
};
