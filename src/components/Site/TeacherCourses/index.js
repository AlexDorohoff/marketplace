import React, { useState } from 'react';
import Loadable from 'react-loadable';
import { useDispatch, useSelector } from 'react-redux';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import ExpansionPanel from '../../Common/ExpansionPanel';
import { hoursPlural } from '../../../core/utils/common';
import Modal from '../../Common/Modal';
import ModalStudentCourseRequest from '../../My/Forms/ModalStudentCourseRequest';
import './styles.scss';

/**
 * Teacher courses
 */
const TeacherCourses = ({ items = [], teacherId }) => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);

  const [signModalOpen, setSignModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const LoadableCourseCalendar = Loadable({
    loader: () => import('../../My/CourseCalendar'),
    loading() {
      return <div>Загрузка...</div>;
    },
  });

  const doSignTeacher = () => {
    if (!session.authenticated) {
      dispatch({ type: 'AUTH_SHOW_DIALOG', payload: true });
    } else {
      setSignModalOpen(true);
    }
  };

  const selectEventFromCalendar = arg => {
    const { event } = arg;
    setSelectedEvent(event);
  };
  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  const [coursesCount, setCoursesCount] = useState(8);
  let courses = items.slice(0, coursesCount);

  courses = courses.map(course => {
    let description, contents;
    try {
      description = JSON.parse(course.description);
    } catch (e) {
      description = course.description;
    }
    try {
      contents = JSON.parse(course.contents);
    } catch (e) {
      contents = course.contents;
    }
    return {...course, description, contents}
  });

  return (
    <>
      <Modal
        open={signModalOpen}
        onClose={() => {
          setSignModalOpen(false);
          setSelectedEvent(null);
        }}
        title="Купить курс?"
      >
        {selectedEvent ? (
          <ModalStudentCourseRequest
            course={selectedCourse}
            event={selectedEvent}
            teacherId={teacherId}
            onClose={() => {
              setSignModalOpen(false);
              setSelectedEvent(null);
            }}
          />
        ) : (
          <LoadableCourseCalendar
            course={selectedCourse}
            onSelect={selectEventFromCalendar}
          />
        )}
      </Modal>

      <div className="teacherc">
        <h2>Разделы</h2>
        {courses.map((item, index) => (
          <ExpansionPanel
            key={`ExpansionPanel${Math.random()}`}
            className="teacherc-item"
            title={`«${item.title}»`}
            isExpanded={openPanelNumber === index + 1}
            onClickExpand={() => handleClickExpand(index + 1)}
            content={
              <div>
                <p>
                  {item.annotation}
                </p>
                <GridRow>
                  <GridCol
                    width={{
                      mobile: 12,
                      tablet: 4,
                    }}
                  >
                    <h3 className="teacherc-h3">Краткие характеристики</h3>
                    <ul className="teacherc-ul">
                      {item.contents.programm &&  item.contents.programm.map(item => {
                        return (
                          <li key={`${item.theme}Тема`}>
                            <span>{item.theme}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </GridCol>
                  <GridCol
                    width={{
                      mobile: 12,
                      tablet: 4,
                    }}
                  >
                    <h3 className="teacherc-h3">Срок отгрузки и гарантия</h3>
                    <ul className="ul-without">
                      {item.description?
                      <li>{hoursPlural(item.description.scope)}</li>:
                        <li>0 часов</li>}
                    </ul>
                  </GridCol>
                  <GridCol
                    width={{
                      mobile: 12,
                      tablet: 4,
                    }}
                  >
                    <h3 className="teacherc-h3">Стоимость</h3>
                    <div className="price-course">{`${item.price}₽`}</div>
                    <div className="teacherc-button">
                      <Button
                        variant="contained"
                        className="button button_default"
                        onClick={() => {
                          doSignTeacher();
                          setSelectedCourse(item);
                        }}
                      >
                        Посмотреть
                      </Button>
                    </div>
                  </GridCol>
                </GridRow>
              </div>
            }
          />
        ))}

        {items.length > coursesCount && (
          <div className="button-center">
            <Button
              className="button button_secondary"
              onClick={() => setCoursesCount(coursesCount + 8)}
            >
              Показать ещё
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

TeacherCourses.propTypes = {
  items: Type.array.isRequired,
};

export default TeacherCourses;
