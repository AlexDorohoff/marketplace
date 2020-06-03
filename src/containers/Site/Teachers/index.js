import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import Type from 'prop-types';
import { useSelector } from 'react-redux';
import TeacherBlock from '../../../components/Site/TeacherBlock';
import ChevronBottom2 from '../../../theme/images/chevronBottom2.svg';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
import connectorTeachers from '../../../core/connectors/teachers';
import Loader from '../../../components/Common/Loader';

/**
 *  Teachers
 */

const Teachers = ({ getTeachersByTitle }) => {
  const courses = useSelector(state => state.courses);
  const teachers = useSelector(state => state.teachers);

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [step, setStep] = useState(6);

  const refPopup = useRef(null);
  const refTarget = useRef(null);

  const getCoursesTitles = (courses, number) => {
    if (courses.length > 0) {
      let titles = [];
      const newTitles = [];
      titles = courses.map(course => course.title);
      titles.forEach(title => {
        if (!newTitles.includes(title)) {
          newTitles.push(title);
        }
      });
      if (!number) {
        return newTitles;
      }
      return newTitles.slice(0, number);
    }
    return [];
  };

  const outputData =
    teachers.data.length > 0 ? teachers.data.slice(0, step) : [];
  const isOutputData = outputData.length > 0;
  const isGetMore = isOutputData && teachers.data.length > step;

  if (teachers.fetching) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Море-Витрины</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <section className="section">
        <div className="select-subject">
          Выбрать витрину
          <Button
            ref={refTarget}
            size="m"
            onClick={() => {
              if (!refPopup.current.anchor)
                refPopup.current.anchor = refTarget.current.control;
              setIsOpenPopup(true);
            }}
            className="button button_link"
          >
            <img
              className="select-subject-img"
              src={ChevronBottom2}
              alt="arrow"
            />
          </Button>
          {isOpenPopup && <div className="popup-overlay"></div>}
          <Popup
            ref={refPopup}
            visible={isOpenPopup}
            onClickOutside={() => setIsOpenPopup(false)}
            mainOffset={10}
            height="adaptive"
          >
            <div className="teachers-more-popup">
              <ul>
                <li
                  onClick={() => {
                    getTeachersByTitle();
                    setStep(6);
                  }}
                >
                  Все витрины
                </li>
                {getCoursesTitles(courses.inputCourses).map(title => {
                  return (
                    <li
                      key={`${title}${Math.random()}`}
                      onClick={() => {
                        getTeachersByTitle(title, courses.inputCourses);
                        setStep(6);
                      }}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Popup>
        </div>
        <GridRow justify="left">
          {isOutputData &&
            outputData.map(teacher => (
              <GridCol
                key={`${teacher.id}${Math.random()}`}
                width={{ mobile: 12, tablet: 6, desktop: 4 }}
              >
                <TeacherBlock teacher={teacher} />
              </GridCol>
            ))}
        </GridRow>
        {isGetMore && (
          <div className="button-center m-t30">
            <Button
              className="button button_secondary"
              onClick={() => setStep(step + 6)}
            >
              Показать ещё
            </Button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

Teachers.propTypes = {
  teachers: Type.object.isRequired,
  getTeachers: Type.func.isRequired,
  getTeachersByTitle: Type.func.isRequired,
};

export default connectorTeachers(Teachers);
