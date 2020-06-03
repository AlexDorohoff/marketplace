import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import './styles_third.scss';

export default function MainSections() {
  return (
    <div className="main-sections">
      <div className="">
        <h2 className="text-center">Политика в отношении третьих лиц</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/privacy-policy">
              <div className="main-sections-item third3">
                <p className="main-sections-heading">Политика конфиденциальности</p>
                <p className="main-sections-description">Правила конфеденциальности маркетплейса</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/api-terms-of-use">
              <div className="main-sections-item third4">
                <p className="main-sections-heading">Условия использования API</p>
                <p className="main-sections-description">Порядок организации обработки персональных данных при использовании Пользователем маркетплейса.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/anti-discrimination-policy">
              <div className="main-sections-item third3">
                <p className="main-sections-heading">Антидискриминационная политика</p>
                <p className="main-sections-description">Политика, в которой описываются запреты на поведение пользователей ресурса</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/affiliate-policy">
              <div className="main-sections-item third3">
                <p className="main-sections-heading">Партнерская политика</p>
                <p className="main-sections-description">Способствует продвижению, популяризации и общему распространению продавцов ресурса.</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/NotFound">
              <div className="main-sections-item third4">
                <p className="main-sections-heading">
                  Политика на информационные запросы.
                </p>
                <p className="main-sections-description">Регламент запроса любой информации о пользователях маркетплейса «Море»</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/NotFound">
              <div className="main-sections-item third4">
                <p className="main-sections-heading">Кодекс поведения поставщика</p>
                <p className="main-sections-description">Условия для поставщиков маркетплейса «Море»</p> 
              </div>
            </NavLink>
          </GridCol>
        </GridRow>
      </div>
    </div>
  );
}
