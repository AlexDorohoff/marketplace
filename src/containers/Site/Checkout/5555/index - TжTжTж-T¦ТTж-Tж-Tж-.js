﻿import React from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import RequestForm from '../../../components/Site/Forms/RequestForm';
import CourseTeacher from '../../../theme/images/SaleItems.jpg';
import HomeLogo1 from '../../../theme/images/home/home-logo1.jpg';
import Closemodal from '../../../theme/images/account/closemodal.svg';
import Footer from '../../../components/Common/Footer';
import { courseBreadcrumbs02 } from '../../../core/utils/testData';


import './styles.scss';


export default function Course() {
  return (
    <>
      <Helmet>
        <title>Море-Корзина</title>
        <meta name="description" content="Море"/>
        <meta name="keywords" content="Море"/>
      </Helmet>



      <section className="section breadcrumbs">
        <Breadcrumbs items={courseBreadcrumbs02}/>
      </section>




      <section className="section">
        <h2>Товары в корзине</h2>

        <GridRow>

          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3}} className="online-sale-item">
            <img className="course-teacher-image" src={HomeLogo1} alt=""/>
          </GridCol>

          <GridCol width={{ mobile: 12, tablet: 3 }}>
            	 <NavLink className="link link_third" to="/NotFound">
	            <img src={Closemodal} alt=""/>
              	</NavLink>
          	<GridCol width={{ mobile: 12, tablet: 3 }}>
            	<div className="course-sale-content">
              	<h3 className="course-sale-h3">Набор первоклассника ErichKrause</h3>
              	<p>Подарочный Набор Первоклассника ErichKrause состоит из 43 предметов
	     	</p>

              	<NavLink className="link link_third" to="/sellers">
              	<div className="course-teacher-button">
                	<Button className="button button_secondary">Оплатить</Button>
              	</div>
              	</NavLink>
            	</div>
          	</GridCol>
          </GridCol> 
        </GridRow>
        <br />

        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="online-sale-item">
            <img className="course-teacher-image" src={CourseTeacher} alt=""/>
          </GridCol>

          <GridCol width={{ mobile: 12, tablet: 3 }}>
            	 <NavLink className="link link_third" to="/NotFound">
	            <img src={Closemodal} alt=""/>
              	</NavLink>
          	<GridCol width={{ mobile: 12, tablet: 3 }}>
            	<div className="course-sale-content">
              	<h3 className="course-sale-h3">Набор первоклассника ErichKrause</h3>
              	<p>Подарочный Набор Первоклассника ErichKrause состоит из 43 предметов
	      	</p>


            	  <NavLink className="link link_third" to="/sellers">
            	  <div className="course-teacher-button">
          	  	<Button className="button button_secondary">Оплатить</Button>
              	</div>
              	</NavLink>
            </div>
          </GridCol>

          </GridCol>




        </GridRow>
      </section>


      <Footer/>
    </>
  );
}
