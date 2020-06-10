import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import { NavLink, useLocation } from 'react-router-dom';
import Type from 'prop-types';
import config from '../../../config';
import UseCourses from '../../../core/connectors/courses';
// import RequestForm from '../../../components/Site/Forms/RequestForm';
import RequestForm01 from '../../../components/Site/Forms/RequestForm01';
import Footer from '../../../components/Common/Footer';
import Modal from '../../../components/Common/Modal';
// import Modal1 from '../../../components/Common/Modal1';
import ModalStudentCourseRequest from '../../../components/My/Forms/ModalStudentCourseRequest';
// import ModalCartRequest from '../../../components/My/Forms/ModalCartRequest';
import './styles.scss';
import { hoursPlural } from '../../../core/utils/common';
import Loader from '../../../components/Common/Loader';

/**
 *  Course
 */
const Course = ({ courses, getCourse, match }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  useEffect(() => {
    getCourse(match.params.id);
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [location]);

  const [signModalOpen, setSignModalOpen] = useState(false);

  // const { setSignModalOpen1 } = setSignModalOpen;
  const { course } = courses;
  let description;
  let contents;

  if (course) {
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
  }

  const doSignCourse = () => {
    if (!session.authenticated) {
      dispatch({
        type: 'AUTH_SHOW_DIALOG',
        payload: true,
      });
    } else if (session.user.type === 'student') {
      setSignModalOpen(true);
    }
  };

  // const doSignCourse1 = () => {
  //   if (!session.authenticated) {
  //     dispatch({
  //       type: 'AUTH_SHOW_DIALOG',
  //       payload: true,
  //     });
  //   } else if (session.user.type === 'student') {
  //     setSignModalOpen1(true);
  //   }
  // };

  if (courses.courseFetching) {
    return <Loader />;
  }

  return (
    <>
      <Modal
        open={signModalOpen}
        onClose={() => setSignModalOpen(false)}
        title="Купить товар?"
      >
        <ModalStudentCourseRequest
          course={course}
          onClose={() => setSignModalOpen(false)}
        />
      </Modal>
      {/* <Modal1
        open={signModalOpen}
        onClose={() => setSignModalOpen1(false)}
        title="Купить товар?"
      >
        <ModalCartRequest
          course={course}
          onClose={() => setSignModalOpen1(false)}
        />
      </Modal1> */}
      <Helmet>
        <title>Море-товары</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <section className="section section_fullwidth">
        <GridRow>
          <GridCol
            width={{
              mobile: 12,
              tablet: 6,
              desktop: 6,
            }}
          >
            {course && (
              <img
                style={{ width: '100%' }}
                src={`${config.baseUrl}/courses/${
                  course.image
                }?${Date.now().toString()}`}
                alt={course.title}
              />
            )}
          </GridCol>
          <GridCol
            width={{
              mobile: 12,
              tablet: 6,
              desktop: 6,
            }}
          >
            <div className="course-inner">
              {course && <h1 className="course-h1">{course.title}</h1>}
              {/* <div className="course-intro">{course && course.annotation}</div> */}
              <div className="">{course && course.annotation}</div>
              <div className="course-txt">
                {course && (
                  <p className="course-h1">
                    <strong>Стоимость:&nbsp;</strong>
                    {course.price}
                    {' '}
                    ₽
                  </p>
                )}

                <p>
                  <strong>Количество:&nbsp;</strong>
                  {description && `${description.scope} ед.`}
                </p>
                <p>
                  <strong>Срок отгрузки:&nbsp;</strong>
                  {description && description.schedule}
                </p>
                <p>
                  <strong>Где:&nbsp;</strong>
                  {description && description.placemap}
                </p>
              </div>
              <GridRow>
                <GridCol>
                  <div className="course-btn">
                    <Button
                      className="button button_default"
                      onClick={() => {
                    doSignCourse();
                  }}
                    >
                      Купить
                    </Button>
                  </div>
                </GridCol>
                <GridCol>
                  <div className="course-btn">
                    <Button
                      className="button button_default"
                      onClick={() => {
                    doSignCourse1();
                  }}
                    >
                      в Корзину
                    </Button>
                  </div>
                </GridCol>
              </GridRow>
            </div>
          </GridCol>
        </GridRow>
        <br />
        <div className="hr2" />
      </section>
      <section className="section">
        <h2>Описание изделия</h2>
        <p className="course-about">{description && description.description}</p>
        <h3 className="course-h3">Особенности:</h3>
        <p className="course-about">{contents && contents.tasks}</p>

        <p className="sertif">
          <strong>
            (что-то вроде- поле ввода- ВАЖНАЯ информация) Товар сертифицирован.
          </strong>
        </p>
        <h2>Условия продавца</h2>
        {/* <div className="course-about"> */}
        <p className="course-about">
          Количество:&nbsp;
          <strong>{description && `${description.scope} ед.`}</strong>
        </p>
        <p className="course-about">
          Срок отгрузки:&nbsp;
          <strong>{description && description.schedule}</strong>
        </p>
        <p>
          (нет поля) Гарантия:&nbsp;
          <b>6 месяцев.</b>
        </p>
        {/* </div> */}
        <h2>Аудитория</h2>
        <p className="course-about">
          {description && description.courseAuditory}
        </p>
        <h2>Характеристики изделия</h2>
        <ul className="course-ul">
          {contents &&
            contents.programm &&
            contents.programm.map(item => {
              if (item.theme.length > 0) {
                return (
                  <li key={`theme${item.theme}`}>
                    <span>{item.theme}</span>
                  </li>
                );
              }
            })}
        </ul>
        <br />
        <GridRow>
          {/* <GridCol width={{ mobile: 12, tablet: 9 }}> */}
          {/* <NavLink className="link link_third" to="/salebasket">
              <div className="course-btn">
                <Button className="button button_default" onClick={course}>
                  Добавить в корзину
                </Button>
              </div> */}

          {/* </NavLink> */}
          {/* </GridCol> */}
          <GridCol width={{ mobile: 12, tablet: 9 }}>
            <NavLink className="link link_third" to="/TeacherReviewAll03">
              <div className="course-btn">
                <Button className="button button_default">
                  Отзывы о товаре
                </Button>
              </div>
            </NavLink>
          </GridCol>
        </GridRow>
      </section>
      <section className="section section_fullwidth">
        <div className="hr2" /> 
      </section>     
      <section className="section">
        <h2>Владелец</h2>
        <GridRow>
          <GridCol
            width={{
              mobile: 12,
              tablet: 6,
              desktop: 6,
            }}
            className="text-center"
          >
            <img
              className="course-teacher-image"
              src={
                course
                  ? `${config.baseUrl}/avatars/${
                      course.user.image
                    }?${Date.now().toString()}`
                  : undefined
              }
              alt=""
            />
          </GridCol>
          <GridCol
            width={{
              mobile: 12,
              tablet: 6,
              desktop: 6,
            }}
          >
            <div className="course-teacher-content">
              <h3 className="course-teacher-h3">
                {course && course.user.name}
                +ID=
                {course && course.user.id}
                +
                {course && course.id}
              </h3>
              <p className="course-about">
                {course && course.user.profile && course.user.profile.yourself}
              </p>
              <NavLink
                className="link link_third"
                to={`/shop/${course && course.user.id}`}
              >
                <div className="course-teacher-button">
                  <Button className="button button_secondary">Подробнее</Button>
                </div>
              </NavLink>
            </div>
          </GridCol>
        </GridRow>
      </section>
      <section className="section">
        <RequestForm01 formType="teacher" />
      </section>
      <Footer />
    </>
  );
};

Course.propTypes = {
  getCourse: Type.func.isRequired,
  match: Type.object.isRequired,
  courses: Type.object.isRequired,
};

export default UseCourses(Course);
