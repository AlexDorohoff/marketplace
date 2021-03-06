import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import Type from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import connectorCourses from '../../../core/connectors/courses';
import CourseBlock from '../../../components/Site/CourseBlock';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
import Loader from '../../../components/Common/Loader';

/**
 *  Courses
 */

const Courses = ({ getCoursesByTitle }) => {
  const courses = useSelector(state => state.courses);

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [step, setStep] = useState(8);

  const refPopup = useRef(null);
  const refTarget = useRef(null);

  const getCoursesTitles = (courses, number) => {
    if (courses.length > 0) {
      const titles = [];
      const multiTitles = [];
      const allTitles = courses
        .map(course => course.title);
      allTitles.forEach(title => {
        if (!multiTitles.includes(title)) {
          if (allTitles.indexOf(title) !== allTitles.lastIndexOf(title)) {
            multiTitles.push(title);
          }
          titles.push(title);
        }
      });
      if (!number) {
        return titles;
      }
      return titles.slice(0, number);

    }
    return [];
  };

  const outputCourses =
    courses.courses.length > 0 ? courses.courses.slice(0, step) : [];

  const isOutputCourses = outputCourses.length > 0;
  const isGetMore = isOutputCourses && courses.courses.length > step;

  if (courses.fetching) {
    return <Loader />;
  }
  const list111 = [{
    title: 'Главная',
    link: '/',
  },{
    title: 'Все товары',
    link: '',
  },
];
  return (
    <>
      <Helmet>
        <title>Море-Товары</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <ScrollTop
        text="Наверх"
        distance={50}
        breakpoint={900}
        style={{ backgroundColor: "#ffffff", color: '#1B60FF', border: '1px solid #1B60FF' }}
        className="scroll-your-role"
        speed={250}
        target={0}
      />
      <section className="section section_fullwidth1 breadcrumbs">
        <Breadcrumbs items={list111} />  
      </section>
      <section className="section section_fullwidth1">
        <div className="select-subject">
          Выбрать товар
          <Button
            ref={refTarget}
            size="m"
            onClick={() => {if (!refPopup.current.anchor) refPopup.current.anchor = refTarget.current.control; setIsOpenPopup(true)}}
            className="button button_link"
          >
            <FiChevronDown className="select-subject-icon" />
          </Button>
          {isOpenPopup && <div className="popup-overlay" />}
          <Popup
            ref={refPopup}
            visible={isOpenPopup}
            onClickOutside={() => setIsOpenPopup(false)}
            mainOffset={10}
            height="adaptive"
          >
            <div className="courses-more-popup">
              <ul>
                <li
                  onClick={() => {
                    getCoursesByTitle();
                    setStep(8);
                  }}
                >
                  Все товары
                </li>
                {getCoursesTitles(courses.inputCourses).map(title => {
                  return (
                    <li
                      key={`${title}${Math.random()}`}
                      onClick={() => {
                        getCoursesByTitle(title);
                        setStep(8);
                      }}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
              {/* <Link pseudo="true" to="/courses">
                Подробнее...
              </Link> */}
            </div>
          </Popup>
        </div>

        {/* <GridRow justify="left" style={{ border: '1px solid #FC8A15' }}> */}
        <GridRow justify="left">
          {isOutputCourses &&
            outputCourses.map(course => (
              <GridCol
                key={`${course.id}${Math.random()}`}
                // width={{ mobile: 12, tablet: 6, desktop: 4 }}
                width={{ mobile: 12, tablet: 4, desktop: 3 }}
              >
                <CourseBlock course={course} />
              </GridCol>
            ))}
        </GridRow>

        {isGetMore && <div className="button-center">
          <Button
            className="button button_secondary"
            onClick={() => setStep(step + 6)}
          >
            Показать ещё
          </Button>
        </div>}
      </section>
      <Footer />
    </>
  );
};

Courses.propTypes = {
  courses: Type.object.isRequired,
  getCourses: Type.func.isRequired,
};

export default connectorCourses(Courses);
