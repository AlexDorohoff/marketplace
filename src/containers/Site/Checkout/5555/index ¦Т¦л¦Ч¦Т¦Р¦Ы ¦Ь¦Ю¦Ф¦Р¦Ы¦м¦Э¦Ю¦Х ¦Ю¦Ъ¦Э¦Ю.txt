import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';


import CourseTeacher from '../../../theme/images/SaleItems.jpg';
import HomeLogo1 from '../../../theme/images/home/home-logo1.jpg';
import Closemodal from '../../../theme/images/account/closemodal.svg';

import Footer from '../../../components/Common/Footer';
import { courseBreadcrumbs02 } from '../../../core/utils/testData';

import ModalTeacherReviewAnswer from '../../../components/My/Forms/ModalTeacherReviewAnswer';
import Dialog from "../../../components/Common/Dialog";

import './styles.scss';

/**
 * Teacher review БЕЗ РАЗНИЦЫ export default function TeacherReview()
 */
export default function Course() {
  const [idOpenModal, setIdOpenModal] = useState(0);
  const handleCloseModal = () => setIdOpenModal(0);
  const handleOpenModal = idModal => setIdOpenModal(idModal);

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

         	  		<div className="course-teacher-button">
            <Button type="none" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Оплатить</Button>
				</div>

      <Dialog isOpen={idOpenModal === 1} onClose={handleCloseModal} title="Ответ на отзыв">
        <ModalTeacherReviewAnswer />
      </Dialog>

              		
            		</div>
          	</GridCol>
          </GridCol>
        </GridRow>




      </section>
      <Footer/>
    </>
  );
}
