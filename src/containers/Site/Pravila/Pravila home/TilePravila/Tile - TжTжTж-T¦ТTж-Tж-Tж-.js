import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Button from 'arui-feather/button';

import { Link } from 'react-router-dom';
import './styles.scss';


export default function MainSections() {
  return (




    <div className="main-sections">

	    <div className="main-sections1">
      <h2 className="text-center main-sections1">Политика Нашего Дома</h2>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/policy-experts">
          <div className="main-sections-item pol1">

            <p className="main-sections-heading">Продавцы</p>
            <p className="main-sections-description">Правила, Условия, Тарифы</p>
          </div>

          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/policy-client">
          <div className="main-sections-item pol2">
            <p className="main-sections-heading">Покупатели</p>
            <p className="main-sections-description">Правила, Политики, Условия, Программы лояльности</p>
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
          <NavLink className="link link_third" to="/privacy-policy">
          <div className="main-sections-item pol3">
            <p className="main-sections-heading">«Политика конфиденциальности»</p>
            <p className="main-sections-description">Правила, нормы  принятые нв платформе «Море» для соблюдения конфиденциальности пользователей</p>
    
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
          <NavLink className="link link_third" to="/terms-of-use">
          <div className="main-sections-item pol4">
            <p className="main-sections-heading">

Условия использования</p>
            <p className="main-sections-description">Требования для пользователей платформы «Море», соблюдение которых обязательно при работе с ресурсом.</p>
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/third-party-policies">
          <div className="main-sections-item pol5">
            <p className="main-sections-heading">Партнеры</p>
            <p className="main-sections-description">Партнерские политики и программы, Франшизы</p>
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item pol6">
            <p className="main-sections-heading">Файлы cookie</p>
            <p className="main-sections-description">Политика к файлвм cookie и аналогичным технологиям</p>
          </div>
          </NavLink>
        </GridCol>
      </GridRow>
</div>

      <div className="text-center m-t10">
        <Button className="button button_secondary">Подписаться</Button>
      </div>
    </div>
  );
};