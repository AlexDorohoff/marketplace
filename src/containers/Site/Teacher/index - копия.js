import React, { useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import Type from 'prop-types';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';
import Popup from 'arui-feather/popup';
import { NavLink, useLocation } from 'react-router-dom';
import TeacherCourses from '../../../components/Site/TeacherCourses';
import HowWork from '../../../components/Site/HowWork';
import UseNavigation from '../../../core/connectors/navigation';
import RequestForm01 from '../../../components/Site/Forms/RequestForm01';
import Footer from '../../../components/Common/Footer';
import './styles.scss';
import connectorTeachers from '../../../core/connectors/teachers';
import config from '../../../config';
import { yearsPlural } from '../../../core/utils/common';
import Loader from '../../../components/Common/Loader';
import Carousel from '../../../components/Site/Carousel/CarouselBase';


/**
 * Teacher
 */
const Teacher = ({ navigationTo, getTeacher, teachers, match, getProfile, profile, }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [location]);
  
  const profileData = profile.profile;

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (profileData && profileData.user.type === 'student') history.push('/my/student1');
  }, [profileData]);



  const courses = profileData
  ? profileData.courses.map(course => {
      let description;
      let contents;
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
      return { ...course, description, contents };
    })
   : [];

  const navTo = to => () => {
    navigationTo(to);
  };

  useEffect(() => {
    getTeacher(match.params.id);
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [location]);

  const refPopup = useRef(null);
  const refTarget = useRef(null);

  const { teacher } = teachers;

  const teacherCourses = teacher ? teacher.courses : [];

  const fio = teacher ? teacher.name.split(' ') : [];

  if (teachers.teacherFetching) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Море-витрина</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <section className="section section_fullwidth">
        <GridRow>
          <GridCol width={{ mobile: 0, tablet: 6 }}>
            {teacher && (
              <img
                style={{ width: '100%' }}
                src={`${config.baseUrl}/avatars/${
                  teacher.image
                }?${Date.now().toString()}`}
                alt={teacher.name}
              />
            )}
          </GridCol>

          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="teacher-about">
              {teacher && (
                <h1>
                  {fio[0]}
                  <br />
                  {`${fio[1]} ${fio[2]}`}
                </h1>
              )}
              <div className="teacher-expir">
                Стаж работы&nbsp;
                {teacher &&
                  teacher.profile &&
                  yearsPlural(teacher.profile.experience)}
              </div>

              <div className="teacher-expir">
                {teacher && teacher.profile && teacher.profile.edo}
              </div>
              <div className="teacher-more">
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
                  Подробнее...
                </Button>
                {isOpenPopup && <div className="popup-overlay" />}
                <Popup
                  ref={refPopup}
                  visible={isOpenPopup}
                  onClickOutside={() => setIsOpenPopup(false)}
                  mainOffset={10}
                  height="adaptive"
                >
                  <div className="teacher-more-popup">
                    {teacher && teacher.profile && teacher.profile.yourself}
                  </div>
                </Popup>
              </div>
              <div className="teacher-button">
                <button
                  type="button"
                  className="button button_default showcase"
                  onClick={navTo(`/showcase/${teacher && teacher.id}`)}
                >
                  Посмотреть витрину
                </button>
              </div>
              <div className="teacher-subject">
                Канцелярские товары
                <br />
                Сувенирная продукция
                <br />
                Персональные подарки
                <br />
              </div>
            </div>
          </GridCol>
        </GridRow>
        <br />
        <div className="hr2" />
      </section>

      <section className="section">
        <h2>О магазине</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <p>{teacher && teacher.profile && teacher.profile.yourself}</p>
          </GridCol>
          <GridCol width={{ mobile: 12, table: 6, desktop: 6 }}>
            {teacher && (
              <img
                className="teacher-image"
                src={`${config.baseUrl}/avatars/${
                  teacher.image
                }?${Date.now().toString()}`}
                alt={teacher.name}
              />
            )}
          </GridCol>

          <NavLink className="link link_third" to="/TeacherReviewAll01">
            <div className="teacher-button">
              <Button className="button button_default">
                Отзывы о магазине
              </Button>
            </div>
          </NavLink>
        </GridRow>
      </section>
      <section className="section">
        {teacher && (
          <TeacherCourses items={teacherCourses} teacherId={teacher.id} />
        )}
      </section>
      {/* <section className="section section_fullwidth">
        <div className="hr2" />
      </section>
      <section className="section">
        <HowWork />
      </section> */}


      <section className="section section_profile">
        <h2 className="settings-h2">Документы</h2>
        <div className="docs-browser-carousel-wrapper">
          {profileData && profileData.user.type === 'teacher' && 
            profileData.user.profile &&
            profileData.user.profile.documents &&
            profileData.user.profile.documents.length > 0 && (
              <Carousel settings={settings} className="docs-browser-carousel">
                {profileData.user.profile.documents.map(item => (
                  <img key={item.id} src={item.img} alt="" />
                ))}
              </Carousel>
            )}
        </div>
        {/* <DocsBrowser title="Мои документы" files={files} /> */}
      </section>


      <section className="section">
        <RequestForm01 formType="teacher" />
      </section>
      <Footer />
    </>
  );
};

Teacher.propTypes = {
  navigationTo: Type.func.isRequired,
  getTeacher: Type.func.isRequired,
  teachers: Type.object.isRequired,
  match: Type.object.isRequired,
};

export default UseNavigation(connectorTeachers(Teacher));
