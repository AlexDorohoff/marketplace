import React, { useRef, useState } from 'react';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import { FiChevronDown } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import connectorCourses from '../../../core/connectors/courses';
import CourseBlock from '../../../components/Site/CourseBlock';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
import Loader from '../../../components/Common/Loader';

/**
 *  Showcase
 */

const Showcase = ({ getCoursesByTitle, match }) => {
  const courses = useSelector(state => state.courses);
  let filtered=[];
  if (courses.courses && courses.courses.length) {
    filtered = courses.courses.filter(item => item.user.id == match.params.id);
  }

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [step, setStep] = useState(6);

  const refPopup = useRef(null);
  const refTarget = useRef(null);

  const getCoursesTitles = (courses, number) => {
    if (courses.length > 0) {
      let titles = [];
      let multiTitles = [];
      const allTitles = courses.map(course => course.title);
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
    filtered.length ? filtered.slice(0, step) : [];

  const isOutputCourses = outputCourses.length > 0;
  const isGetMore = isOutputCourses && filtered.length > step;

  if (courses.fetching) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Море-Товары</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <section className="section">
        <div className="select-subject">
          Выбрать товар
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
                    setStep(6);
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
                        setStep(6);
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

        <GridRow justify="left">
          {isOutputCourses &&
            outputCourses.map(course => (
              <GridCol
                key={`${course.id}${Math.random()}`}
                width={{ mobile: 12, tablet: 6, desktop: 4 }}
              >
                <CourseBlock course={course} />
              </GridCol>
            ))}
        </GridRow>

        {isGetMore && (
          <div className="button-center">
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

export default connectorCourses(Showcase);
