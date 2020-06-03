import React from 'react';
import Helmet from 'react-helmet';
import Link from 'arui-feather/link';
import TeacherTimetablePro from '../../../components/My/Forms/ModalTeacherTimetablePro1';
import './styles.scss';
import ImgSettings3 from '../../../theme/images/account/img-settings3.svg';


const TeacherTimetable = () => {
  return (
    <>
      <Helmet>
        <title>Teacher</title>
        <meta name="description" content="Teacher review" />
        <meta name="keywords" content="Teacher review" />
      </Helmet>
      <section className="section">
        <div className="timetable">
          Расписание
          <Link pseudo><img src={ImgSettings3} alt="" /></Link>
        </div>
        <div className="org-title">
          Московский лицей им. М.В. Ломоносова
        </div>
        <TeacherTimetablePro />
      </section>
    </>
  )
};

export default TeacherTimetable;
