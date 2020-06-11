import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollTop from "react-scrolltop-button";
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Breadcrumbs from '../../../../components/Pravila/BreadcrumbsPravila';
import { confBreadcrumbs } from '../../../../core/utils/testData';
import Scroll from '../ScrollTotop';
import Footer from '../../../../components/Common/Footer';
import RequestForm from '../../../../components/Site/Forms/RequestForm_reg';
import MainSections from '../Pravila home/TilePravila/Tile_privacy';

const Experts = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Море-Политика конфиденциальности</title>
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
    <section className="section breadcrumbs">
      <Breadcrumbs items={confBreadcrumbs} />             
      <Scroll />
    </section>
    <section className="section section_fullwidth">
      <div className="regul">
        <GridRow>
          <GridCol width={{ mobile: 0, tablet: 6 }} />
          <GridCol width={{ mobile: 12, tablet: 6 }}>
            <div className="teacher-about">
              <h1>
                Правила Нашего Дома
              </h1>
              <div className="bold18">Знакомство с юридическими условиями и политиками торговой площадки «Море»</div>
            </div>
            <br />
            <div className="teacher-more" />
            <GridCol width={{ mobile: 12, tablet: 6 }}>
              <form>
                <input type="text1" name="q" placeholder="Поиск политик" />
              </form>
            </GridCol>
          </GridCol>
        </GridRow>
      </div>
    </section>
    <div className="online-learning">
      <GridRow>
        <section className="section">
          <MainSections />
        </section>
      </GridRow>
    </div>
    <div className="online-learning">
      <p className="bold18 text-center">Получайте информацию о новостях, акциях, бонусах прямо на ваш почтовый ящик</p>
      <GridRow>
        <section className="section">
          <RequestForm formType="teacher" />
        </section>
      </GridRow>
    </div>
    <Footer />
  </>
);

export default Experts;
