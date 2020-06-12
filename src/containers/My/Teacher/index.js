import React from 'react';
import Helmet from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import { files, myteacherBreadcrumbs } from '../../../core/utils/testData';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import TeacherCreateForm from '../../../components/My/Forms/Teacher/createTeacher';
import Pencil from '../../../theme/images/account/pencil.svg';
import DocsBrowser from '../../../components/Common/DocsBrowser';
import Eye from '../../../theme/images/account/eye.svg';
import './styles.scss';

/**
 * teacher
 */
export default () => {
  return (
    <>
      <Helmet>
        <title>Море-Создание профиля продавца</title>
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
      <section className="section breadcrumbs">
        <Breadcrumbs items={myteacherBreadcrumbs} />
      </section>
      <section className="section">
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            <h1 className="student-title">Создание профиля продавца</h1>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 9, desktop: 3 }}
            className="form-field right-poz"
          >
            <div className="student-pencil">
              <Link pseudo>
                <img src={Pencil} alt="" />
              </Link>
            </div>
            <div className="student-refresh">
              <Button
                type="submit"
                className="button button_default button_modal"
              >
                Образец
              </Button>
            </div>
          </GridCol>
        </GridRow>
        <TeacherCreateForm formType="teacher" />
        <hr className="teacher-hr" />
      </section>
      <section className="section">
        <DocsBrowser title="Материалы" files={files} />
      </section>
      <section className="section course-create-title">
        <h2 className="course-create-h2">
          Курсы
          <div className="course-create-title-controls">
            <Link pseudo>
              <img src={Pencil} alt="" />
            </Link>
            <Link pseudo>
              <img src={Eye} alt="" />
            </Link>
          </div>
        </h2>
        <div className="course-create">
          <GridRow>
            <GridCol
              width={{ mobile: 12, tablet: 9, desktop: 9 }}
              className="form-field"
            >
              <ul>
                <li>Поэты “серебряного” века</li>
                <li>Слабые позиции согласных</li>
                <li>Согласные шипящие звуки [ж], [ш] (непарные твёрдые).</li>
              </ul>
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 9, desktop: 3 }}
              className="form-field right-poz"
            >
              <div className="course-create-btn">
                <Button type="submit" className="button button_default">
                  Создать курс
                </Button>
              </div>
            </GridCol>
          </GridRow>
        </div>
      </section>
    </>
  );
};
