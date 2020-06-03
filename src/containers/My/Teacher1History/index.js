import React from 'react';
import Helmet from 'react-helmet';
import TeacherHeader from '../../../components/My/TeacherHeader';
import TeacherHistoryBlock from '../../../components/My/TeacherHistory';
import TeacherStudentsAssignments from '../../../components/My/TeacherStudentsAssignments';

const TeacherHistory = () => {
  return (
    <>
      <Helmet>
        <title>Teacher</title>
        <meta name="description" content="Teacher" />
        <meta name="keywords" content="Teacher" />
      </Helmet>
      <TeacherHeader />
      <section className="section">
        <TeacherHistoryBlock />
        <TeacherStudentsAssignments />
      </section>
    </>
  )
};

export default TeacherHistory;
