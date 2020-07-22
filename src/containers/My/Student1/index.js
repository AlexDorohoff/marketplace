import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Type from 'prop-types';
// import { FaPencilAlt, FaEye } from 'react-icons/fa';
import Link from 'arui-feather/link';
import { files } from '../../../core/utils/testData';
import DocsBrowser from '../../../components/Common/DocsBrowser';
// import StudentsTeachers from '../../../components/My/StudentsTeachers';
// import StudentsTasks from '../../../components/My/StudentsTasks';
import StudentAcademicPlan from '../../../components/My/StudentAcademicPlan';
import StudentFinance from '../../../components/My/StudentFinance';
import StudentChat from '../../../components/My/StudentChat';
import './styles.scss';
// import Stats1 from '../../../theme/images/account/stats-1.png';
// import Stats2 from '../../../theme/images/account/stats-2.png';
import Review1 from '../../../theme/images/account/review-1.png';
import Review2 from '../../../theme/images/account/review-2.png';
import StudentCourse from '../../../components/My/StudentCourse';
// import Dialog from '../../../components/Common/Dialog';
// import ModalStudentHistory from '../../../components/My/Forms/ModalStudentHistory';
// import ModalTeacherHistory from '../../../components/My/TeacherHistory';
import StudentHeader from '../../../components/My/StudentHeader';
import useProfile from '../../../core/connectors/profile';

/**
 * student
 */
const Student1 = ({ profile, getProfile, history }) => {

  const [idOpenModal, setIdOpenModal] = useState('');

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
    if (profileData && profileData.user.type === 'teacher') history.push('/my/lk');
  }, [profileData]);

  return (
    <>
      <Helmet>
        <title>Море-Профиль Покупателя</title>
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
      {profileData ? <StudentHeader profile={profileData} /> : <StudentHeader profile={{fetching: profile.fetching}} />}
      {/* <section className="section section_profile">
        <h2 className="settings-h2-">
          Мои преподаватели
          <div className="teachers-control">
            <Link pseudo>
              <FaEye size="30px" />
            </Link>
          </div>
        </h2>
        {profileData && profileData.teachers && <StudentsTeachers items={profileData.teachers} />}
        <StudentsTeachers items={
            [
              {
                id : 1, 
                name: 'Барышева Екатерина Витальевна', 
                courses: [
                  {
                    id: 1, 
                    title: 'Русский Язык'
                  }, 
                  {
                    id: 2, 
                    title: 'Литература'
                  }
                ]
              },
              {
                id : 2, 
                name: 'Антонова Елена Павловна', 
                courses: [
                  {
                    id: 3, 
                    title: 'Биология'
                  }
                ]
              },
              {
                id : 3, 
                name: 'Пупкин Андрей Петрович', 
                courses: [
                  {
                    id: 5, 
                    title: 'Английский Язык'
                  }, 
                  {
                    id: 6, 
                    title: 'Японский Язык'
                  }, 
                  {
                    id: 31, 
                    title: 'Китайский Язык'
                  }
                ]
              }
            ]
          } 
        />
      </section> */}

      {/* <section className="section section_profile">
        <h2 className="settings-h2">Задания преподавателей</h2>
        <StudentsTasks items={[]} />
      </section> */}

      {/* <section className="section section_profile"> */}
      <section className="section section_fullwidth1">
        <DocsBrowser title="Галерея покупок" files={files} />
      </section>

      {/* <section className="section section_profile"> */}
      <section className="section section_fullwidth1">
        <h2 className="settings-h2">Мои покупки</h2>
        <StudentAcademicPlan items={[]} />
      </section>

      {/* <section className="section section_profile"> */}
      <section className="section section_fullwidth1">
        <h2 className="settings-h2">Финансы и Статистика</h2>
        <StudentFinance items={[]} />
        <GridRow className="stats-wrap">
          {/* <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <Link
              pseudo
              onClick={() => setIdOpenModal('studentHistory')}
            >
              <img src={Stats1} alt="" />
            </Link>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <Link pseudo>
              <img src={Stats2} alt="" />
            </Link>
          </GridCol> */}
          {/* <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Stats1} alt="" />
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Stats2} alt="" />
            </NavLink>
          </GridCol> */}
        </GridRow>
      </section>

      {/* <section className="section section_profile"> */}
      <section className="section section_fullwidth1">
        <h2 className="settings-h2">Отзывы</h2>
        <GridRow className="stats-wrap">
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Review2} alt="" />
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <NavLink to="/under-development">
              <img src={Review1} alt="" />
            </NavLink>
          </GridCol>
        </GridRow>
      </section>

      {/* <section className="section section_profile"> */}
      <section className="section section_fullwidth1">
        <h2 className="settings-h2">Чат</h2>
        <StudentChat items={[]} />
      </section>

      {/* <section className="section section_profile"> */}
      <section className="section section_fullwidth1">
        <DocsBrowser title="Интересные товары" files={files} />
      </section>

      {/* <section className="section section_profile"> */}
        {/* <h2 className="settings-h2"> */}
          {/* Корзина */}
          {/* <div className="course-create-title-controls">
            <Link pseudo>
              <FaPencilAlt size="30px" />
            </Link>
            <Link pseudo><img src={Eye} alt="" /></Link>
          </div> */}
        {/* </h2> */}
        {/* {profileData && (
          <StudentCourse
            name={profileData.user.name}
            items={profileData.courses}
          />
        )}
      </section> */}
      {/* <Dialog
        isOpen={idOpenModal === 'studentHistory'}
        onClose={() => setIdOpenModal('')}
        title="История занятий"
      >
        <ModalStudentHistory />
      </Dialog> */}
    </>
  );
}
Student1.propTypes = {
  profile: Type.object.isRequired,
  getProfile: Type.func.isRequired,
};
export default useProfile(Student1);
