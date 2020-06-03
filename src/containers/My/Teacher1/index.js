import React, { useState, useEffect } from 'react';
import { useLocation , NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';

import Type from 'prop-types';
// import { FaPencilAlt } from 'react-icons/fa';
import './styles.scss';
import Star1 from '../../../theme/images/star1.svg';
// import Stats1 from '../../../theme/images/account/stats-1.png';
// import Stats2 from '../../../theme/images/account/stats-2.png';
import Review1 from '../../../theme/images/account/review-1.png';
import Review2 from '../../../theme/images/account/review-2.png';
import TeacherAcademicPlan from '../../../components/My/TeacherAcademicPlan';
import TeacherFinance from '../../../components/My/TeacherFinance';
import TeacherChat from '../../../components/My/TeacherChat';
import TeacherCourse from '../../../components/My/TeacherCourse';
// import TeacherStudents from '../../../components/My/TeacherStudents';
// import TeacherTasks from '../../../components/My/TeacherTasks';
// import ModalTeacherHistory from '../../../components/My/TeacherHistory';
import VideoBlock from '../../../components/Common/VideoBlock';
import TeacherHeader from '../../../components/My/TeacherHeader';
import UseProfile from '../../../core/connectors/profile';
// import Modal from '../../../components/Common/Modal';
import Carousel from '../../../components/Site/Carousel/CarouselBase';

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  margin: 0,
};

/**
 * teacher
 */
const Teacher1 = ({ getProfile, profile, history }) => {

  // const [idOpenModal, setIdOpenModal] = useState('');

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
  const materials = [];
  if (courses.length > 0) {
    courses.forEach(course => {
      if (course.contents && course.contents.programm) {
        course.contents.programm.forEach(theme => {
          if (theme.materials) {
            theme.materials.forEach(material => materials.push(material));
          }
        });
      }
    });
  }

  return (
    <>
      <Helmet>
        <title>Море-Профиль продавца</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      {profileData ? <TeacherHeader profile={profileData} /> : <TeacherHeader profile={{fetching: profile.fetching}} />}

      <section className="section section_profile">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <h2>О витрине</h2>
          </GridCol>
          <GridCol width={{ mobile: 12, table: 6, desktop: 6 }}>
            <div className="teacher-star">
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
              <img src={Star1} alt="" />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <p>
              {profileData &&
                profileData.user.profile &&
                profileData.user.profile.yourself}
            </p>
          </GridCol>
          <GridCol width={{ mobile: 12, table: 6 }}>
            <VideoBlock bannerSrc="" videoId="" />
          </GridCol>
        </GridRow>
      </section>

      <section className="section section_profile">
        <h2 className="docs-browser-title">Документы</h2>
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
      {/* 
      <section className="section section_profile">
        <h2 className="teacher-settings-h2">Мои ученики</h2>
        <TeacherStudents items={[]} />
      </section> */}

      {/* <section className="section section_profile">
        <h2 className="teacher-settings-h2">
          Задания учеников
          <div className="teachers-students-tasks">Ожидание заданий</div>
          <div className="teachers-students-tasks-amount">3</div>
        </h2>
        <TeacherTasks items={[]} />
      </section> */}

      <section className="section section_profile">
        <h2 className="teacher-settings-h2">Реализация</h2>
        {profileData && profileData.user.type === 'teacher' && <TeacherAcademicPlan profile={profileData} />}
      </section>

      <section className="section section_profile">
        <h2 className="teacher-settings-h2">Финансы и Статистика</h2>
        <TeacherFinance items={[]} />
        {/* <GridRow className="teacher-stats-wrap">
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Stats1} alt="" />
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Stats2} alt="" />
            </NavLink>
          </GridCol>
        </GridRow> */}
      </section>

      <section className="section section_profile">
        <h2 className="teacher-settings-h2">Отзывы</h2>
        <GridRow className="teacher-stats-wrap">
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Review2} alt="" />
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              {/* <NavLink to="/my/teacher1/review"> */}
              <img src={Review1} alt="" />
            </NavLink>
          </GridCol>
        </GridRow>
      </section>

      <section className="section section_profile">
        <h2 className="teacher-settings-h2">Чат</h2>
        <TeacherChat items={[]} />
      </section>

      <section className="section section_profile">
        <h2 className="docs-browser-title">Галерея товаров</h2>
        <div className="docs-browser-carousel-wrapper">
          {materials.length > 0 && (
            <Carousel settings={settings} className="docs-browser-carousel">
              {materials.map(item => (
                <img key={`${item}material`} src={item} alt="Материал" />
              ))}
            </Carousel>
          )}
        </div>
        {/* <DocsBrowser title="Материалы" files={files} /> */}
      </section>

      <section className="section section_profile course-create-title">
        <h2 className="course-create-h2">
          Товары (создание и редактирование)
          <div className="course-create-title-controls">
            {/* <button type="button">
              <FaPencilAlt size="30px" />
            </button> */}
            {/* <Link pseudo><img src={Eye} alt="" /></Link> */}
          </div>
        </h2>
        {profileData && (
          <TeacherCourse
            name={profileData.user.name}
            items={profileData.courses}
          />
        )}
      </section>

      {/* <Modal
        open={idOpenModal === 'teacherHistory'}
        onClose={() => setIdOpenModal('')}
        title="История занятий"
      >
        <ModalTeacherHistory />
      </Modal> */}
    </>
  );
}

Teacher1.propTypes = {
  profile: Type.object.isRequired,
  getProfile: Type.func.isRequired,
};

export default UseProfile(Teacher1);
