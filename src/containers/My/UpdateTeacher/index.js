import React, { useState } from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Modal from '../../../components/Common/Modal';
import { files } from '../../../core/utils/testData';
import TeacherUpdateForm from '../../../components/My/Forms/Teacher/updateTeacher';
import DocsBrowser from '../../../components/Common/DocsBrowser';
import useProfile from '../../../core/connectors/profile';
import './styles.scss';
import teacherUpdateModel from '../../../theme/images/teacherUpdateModel.png';

/**
 * teacher
 */
const UpdateTeacher = ({ profile }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const prof = { ...profile.profile };

  const data = prof ? prof.user : null;

  return (
    <>
      <Helmet>
        <title>Море-Изменение профиля продавца</title>
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
            width={{ mobile: 12, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            <h1 className="student-title">Изменение профиля продавца</h1>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 9, desktop: 3 }}
            className="form-field right-poz"
            align="middle"
          >
            <div className="student-refresh">
              <Button
                type="button"
                className="button button_default button_modal"
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
                  src={teacherUpdateModel}
                  alt="Образец"
                />
              </Modal>
            </div>
          </GridCol>
        </GridRow>
        {data ? (
          <TeacherUpdateForm formType="teacher" data={data} />
        ) : (
          <TeacherUpdateForm formType="teacher" data={{}} />
        )}
        <hr className="teacher-hr" />
      </section>
      <section className="section">
        <DocsBrowser title="Галерея товаров" files={files} />
      </section>
    </>
  );
};

export default useProfile(UpdateTeacher);
