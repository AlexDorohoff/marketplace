import React, { useState } from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Modal from '../../../components/Common/Modal';
// import Link from 'arui-feather/link';
import StudentForm from '../../../components/My/Forms/Student';
// import Pencil from '../../../theme/images/account/pencil.svg';
import DocsBrowser from '../../../components/Common/DocsBrowser';
import { files } from '../../../core/utils/testData';
import './styles.scss';
import teacherUpdateModel from '../../../theme/images/teacherUpdateModel.png';
import useProfile from '../../../core/connectors/profile';

/**
 * student
 */
const Student = ({ profile }) => {

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const prof = { ...profile.profile };

  const data = prof ? prof.user : null;

  return (
    <>
      <Helmet>
        <title>Море-Изменение профиля покупателя</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <ScrollTop
        text="Наверх"
        distance={50}
        breakpoint={900}
        style={{ backgroundColor: "#ffffff", color: '#272727' }}
        // className="scroll-your-role"
        speed={250}
        target={0}
      />
      <section className="section">
        <GridRow align="middle">
          <GridCol width={{ mobile: 12, tablet: 9, desktop: 9 }} className="form-field">
            <h1 className="student-title">Изменение профиля покупателя</h1>
          </GridCol>
          <GridCol align="middle" width={{ mobile: 12, tablet: 3, desktop: 3 }} className="form-field right-poz">
            {/* <div className="student-pencil">
              <Link pseudo><img src={Pencil} alt="" /></Link>
            </div> */}
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
                title='Образец'
              >
                <img style={{maxWidth: '765px'}} src={teacherUpdateModel} alt="Образец"></img>
              </Modal>
            </div>
          </GridCol>
        </GridRow>
        {data ? <StudentForm formType="student" data={data} /> : <StudentForm formType="student" data={{}} />}
        <hr className="student-hr" />
      </section>
      <section className="section">
        <DocsBrowser title="Галерея покупок" files={files} />
        <DocsBrowser title="Интересные товары" files={files} />
      </section>
    </>
  );
}

export default useProfile(Student);
