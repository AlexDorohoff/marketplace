import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import './styles_client.scss';

export default function MainSections() {
  return (

    <div className="main-sections">
      <div className="">
        <h2 className="text-center">Политика покупателя</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/privacy-policy">
              <div className="main-sections-item client3">
                <p className="main-sections-heading">Политика конфиденциальности</p>
                <p className="main-sections-description">Правила конфеденциальности маркетплейса</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-useragreement">
              <div className="main-sections-item client4">
                <p className="main-sections-heading">Пользовательское соглашение</p>
                <p className="main-sections-description">Правила использования Пользователем Системы и/или предоставляемого на его основе сервиса</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/soglasie-na-obrabotku-dannyh-152-fz">
              <div className="main-sections-item client4">
                <p className="main-sections-heading">
                  Политика по обработке и защите персональных данных
                  {' '}
                </p>
                <p className="main-sections-description">Порядок организации обработки персональных данных при использовании Пользователем маркетплейса.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/terms-of-use">
              <div className="main-sections-item client3">
                <p className="main-sections-heading">Правила использования</p>
                <p className="main-sections-description">Условия и требования при использовании ресурса.</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="m-b20">
            <NavLink className="link link_third" to="/community-policy">
              <div className="main-sections-item client1">
                <p className="main-sections-heading">Политика сообщества</p>
                <p className="main-sections-description">Правила поведения пользователей маркетплейса «Море»</p>   
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-cookie">
              <div className="main-sections-item client2">
                <p className="main-sections-heading">Политика файлов Cookie</p>
                <p className="main-sections-description">Соглашение об использовании платежных сервисов</p>     
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="m-b20">
            <NavLink className="link link_third" to="/NotFound">
              <div className="main-sections-item client5">
                <p className="main-sections-heading">Политика оплаты</p>
                <p className="main-sections-description">Соглашение об использовании платежных сервисов</p>     
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/forbidden-deal-policy">
              <div className="main-sections-item client4">
                <p className="main-sections-heading">Политика запрещенных сделок</p>
                <p className="main-sections-description">Объяснясняется, что запрещено, не соответствуют нашим ценностям, вредно для наших пользователей.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/anti-discrimination-policy">
              <div className="main-sections-item client3">
                <p className="main-sections-heading">Антидискриминационная политика</p>
                <p className="main-sections-description">Политика, в которой описываются запреты на поведение пользователей ресурса</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-arbitration">
              <div className="main-sections-item client4">
                <p className="main-sections-heading">Арбитражные правила </p>
                <p className="main-sections-description">Политика разрешения споров и конфликтных ситуаций.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-trademark">
              <div className="main-sections-item client3">
                <p className="main-sections-heading">Политика в области товарных знаков</p>
                <p className="main-sections-description">Правила обращения с нашими товарными знаками, услугам, сервисами и инструментами</p>  
              </div>
            </NavLink>
          </GridCol>
        </GridRow>
      </div>
    </div>
  );
}
