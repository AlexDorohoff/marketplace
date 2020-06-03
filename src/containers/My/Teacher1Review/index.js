import React from 'react';
import Helmet from 'react-helmet';
import TeacherReview from '../../../components/My/TeacherReview';

const TeacherHistory = () => {
  return (
    <>
      <Helmet>
        <title>Teacher</title>
        <meta name="description" content="Teacher review" />
        <meta name="keywords" content="Teacher review" />
      </Helmet>
      <section className="section">
        <TeacherReview />
      </section>
    </>
  )
};

export default TeacherHistory;
