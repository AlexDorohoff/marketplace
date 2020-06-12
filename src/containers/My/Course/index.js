import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import UseProfile from '../../../core/connectors/profile';
import Modal from '../../../components/Common/Modal';
import CourseForm from '../../../components/My/Forms/Course/createCourse';
import profileCourseModel from '../../../theme/images/profileCourseModel.png';
import './styles.scss';

/**
 * mycourse
 */
const CreateCourse = ({ profile }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const [prof, setProf] = useState({});

  useEffect(() => {
    setProf({ ...profile.profile });
    window.scrollTo(0, 0);
  }, []);

  const data = prof.user;

  return (
    <>
      <Helmet>
        <title>Море-Создание профиля товара</title>
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
      <section className="section">
        <GridRow align="middle">
          <GridCol
            width={{ mobile: 12, tablet: 9, desktop: 8 }}
            className="form-field"
          >
            <h1 className="course-title">Создание профиля товара</h1>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field right-poz"
            align="middle"
          >
            <div className="course-refresh">
              <Button
                type="button"
                className="button button_default"
                onClick={() => setIsOpenPopup(true)}
              >
                Образец
              </Button>
              <Modal
                open={isOpenPopup}
                onClose={() => setIsOpenPopup(false)}
                title="Образец"
              >
                <img
                  style={{ maxWidth: '765px' }}
                  src={profileCourseModel}
                  alt="Образец"
                />
              </Modal>
            </div>
          </GridCol>
        </GridRow>
        {data && <CourseForm formType="course" profile={data} />}
      </section>
    </>
  );
};

export default UseProfile(CreateCourse);
