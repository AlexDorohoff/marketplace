import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import Popup from 'arui-feather/popup';

import CourseTeacher from '../../../theme/images/SaleItems.jpg';
import HomeLogo1 from '../../../theme/images/home/home-logo1.jpg';
import Closemodal from '../../../theme/images/account/closemodal.svg';

import Footer from '../../../components/Common/Footer';
import { checkoutBreadcrumbs } from '../../../core/utils/testData';

import ModalTeacherCard from '../../../components/My/Forms/ModalTeacherCard';
import Dialog from "../../../components/Common/Dialog";
import IntlPhoneInput from 'arui-feather/intl-phone-input';
import { Form, Input, InputNumber, Button } from 'antd';

import './styles.scss';

/**
 * Checkout заполнение заявки на доставку и получение товара
 */
export default function Course() {
  const [idOpenModal, setIdOpenModal] = useState(0);
  const handleCloseModal = () => setIdOpenModal(0);
  const handleOpenModal = idModal => setIdOpenModal(idModal);
  const SIZES = [ 'm'];

  return (

    <>
      <Helmet>
        <title>Море-Оформление заявки</title>
        <meta name="description" content="Море"/>
        <meta name="keywords" content="Море"/>
      </Helmet>

      <section className="section breadcrumbs">
        <Breadcrumbs items={checkoutBreadcrumbs}/>
      </section>

      <section className="section">
        <h2>Оформление заявки</h2>


  
        <div className="">
		    <GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div  className="tel-number">
					{
						SIZES.map(size => (
						<div key={ size } className='row'>
						<IntlPhoneInput size={ size } autocomplete='boolean'/>
						</div>
						))
					}
					</div>
				</GridCol>
			</GridRow>	
            <GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
			  
					<form>
		
						<input  type="tel" name="q" placeholder="Поиск политик" />
					</form>			  

				</GridCol>
              <GridCol width={{ mobile: 0, tablet: 6 }} />
				<GridCol width={{ mobile: 12, tablet: 6 }}>
			  
					<form>
		
						<input  type="text2" name="q" placeholder="Поиск политик" />
					</form>			  

				</GridCol>

				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<form>
						<input  type="text2" name="q" placeholder="Поиск политик" />
					</form>			  
					<form>
						<input  type="text1" name="q" placeholder="Поиск политик" />		
						<input  type="text1" name="q" placeholder="Поиск политик" />
					</form>
				</GridCol>

           </GridRow>
        </div>

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
            	</div>
          	</GridCol>
          </GridCol> 
        </GridRow><br />
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
            		</div>
          	</GridCol>
          </GridCol>
        </GridRow>
        <GridRow><br />
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="online-sale-item" />
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="online-sale-item">
         	  <div className="course-teacher-button">
            		<Button type="none" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Оплатить покупку</Button>
		  </div>

      		<Dialog isOpen={idOpenModal === 1} onClose={handleCloseModal} title="Оплатить покупку">
        		<ModalTeacherCard />
      		</Dialog>
         </GridCol>
        </GridRow>


      </section>
      <Footer/>
    </>
  );
}
