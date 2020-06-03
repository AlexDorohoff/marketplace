/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import Popup from 'arui-feather/popup';

import Footer from '../../../components/Common/Footer';
import { checkoutBreadcrumbs } from '../../../core/utils/testData';

import ModalTeacherCard from '../../../components/My/Forms/ModalTeacherCard';

import Dialog from '../../../components/Common/Dialog';
import IntlPhoneInput from 'arui-feather/intl-phone-input';
import EmailInput from 'arui-feather/email-input';
import Textarea from 'arui-feather/textarea';
import Input from 'arui-feather/input';
import Select from 'arui-feather/select';
import './styles.scss';

/**
 * Checkout заполнение заявки на доставку и получение товара
 */

export default function Course() {
	
  const [idOpenModal, setIdOpenModal] = useState(0);
  const handleCloseModal = () => setIdOpenModal(0);
  const handleOpenModal = idModal => setIdOpenModal(idModal);
  const sizes = ['m'];
  const options = [
    { value: '00', text: 'г. Москва' },
    { value: '01', text: 'Республика Адыгея' },
    { value: '02', text: 'Республика Башкортостан' },
    { value: '03', text: 'Республика Бурятия' },
    { value: '04', text: 'Республика Алтай' },
    { value: '05', text: 'Республика Дагестан' },
    { value: '06', text: 'Республика Ингушетия' },
    { value: '07', text: 'Кабардино-Балкарская Республика' },
    { value: '08', text: 'Республика Калмыкия' },
    { value: '09', text: 'Карачаево-Черкесская Республика' },
    { value: '10', text: 'Республика Карелия' },
    { value: '11', text: 'Республика Коми' },
    { value: '12', text: 'Республика Марий Эл' },
    { value: '13', text: 'Республика Мордовия' },
    { value: '14', text: 'Республика Саха-Якутия' },
    { value: '15', text: 'Республика Северная Осетия - Алания' },
    { value: '16', text: 'Республика Татарстан' },	
    { value: '17', text: 'Республика Тыва' },
    { value: '18', text: 'Удмуртская Республика' },
    { value: '19', text: 'Республика Хакасия' }
  ];

  return (

    <>
      <Helmet>
        <title>Море-Оформление заказа</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={checkoutBreadcrumbs} />
      </section>
      <section className="section">
        <h2>Оформление заказа</h2>

        <div className="">
			<GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div className="tel-number">
					{
						['m'].map(size => (
						<div key={size}>
							<Input
								id="name"
								size={size}
								placeholder='Введите Ф.И.О'
								// defaultValue='Белоусов'
								width="available"
								clear
								autocomplete='on'
								
							/>
					</div>
					))
					}
					</div>
					<div className="form-field form-text text-left" style={{ color: '#979797' }}>
						Пожалуйста, заполните это поле в правильном порядке. Например, «Иванов Сергей Петрович» или «Петрова Екатерина»
					</div>					
				</GridCol>	
			</GridRow><br />
			<GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div className="tel-number">
					{
						['m'].map(size => (
						<div key={size}>
							<Input
								id="adress"
								size={size}
								placeholder='Введите адрес'
								defaultValue=''
								width="available"
								clear
								autocomplete='on'
							/>
					</div>
					))
					}
					</div>
				</GridCol>	
			</GridRow><br />
			<GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div className=''>
						{
							sizes.map(size => (
								<div className='row' key={size}>
									<div className='column'>
										<Select
											id="region"
											label='Выберите регион доставки'					
											size={size}
											mode='radio-check'
											options={options}
											width="available"
											mobileMenuMode='popup'
											mobileTitle='Очень длинный заголовок на мобильном устройстве'
											nativeOptionPlaceholder='Всего регионов: 85'
										/>
									</div>

								</div>
							))
						}
					</div>
				</GridCol>
				<GridCol width={{ mobile: 12, tablet: 6 }}>				
						<div className="tel-number">
					{
						['m'].map(size => (
						<div key={size}>
							<Input
								id="codeWord"
								size={size}
								placeholder='Введите кодовое слово'
								width="available"
								clear
								autocomplete='on'
							/>
					</div>
					))
					}
					</div>			
				</GridCol>			
			</GridRow><br />			
		    <GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div className="tel-number">
					{
						sizes.map(size => (
						<div key={size} className='row'>
						<IntlPhoneInput
							id="phone"
							size={size}
							width="available"
						/>
						</div>
						))
					}
					</div>
				</GridCol>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div className="tel-number">	
						<EmailInput
							id="email"
							placeholder='Введите e-mail'
							autocomplete='on' 
							width="available"
						/>				
					</div>
				</GridCol>				
			</GridRow><br />	
			<GridRow>
				<GridCol width={{ mobile: 12, tablet: 6 }}>
					<div className="">
					{
						sizes.map(size => (
						<div key={size} className='row'>
							<Textarea
								id="info"
								label='Дополнительные сведения (не более 300 символов)'
								placeholder='Введите информацию'
								maxLength={300}
								size={size}
							/>
						</div>
						))
					}
					</div>
				</GridCol>			
			</GridRow>
			<br />        
        </div>
        <GridRow><br />
			<GridCol width={{ mobile: 12, tablet: 6 }}>
         	  	<div className="checkout button-center m-t30">
            		<Button type="none" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Оплатить покупку</Button>
		  		</div>
      		<Dialog isOpen={idOpenModal === 1} onClose={handleCloseModal} title="Оплатить покупку">
        		<ModalTeacherCard />
      		</Dialog>
			</GridCol>
        </GridRow>
      </section>
      <Footer />
    </>
  );
}
