import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import Button from 'arui-feather/button';

/**
 * Main sections
 */
export default function MainSections() {
  return (




    <div className="main-sections">

      <h2 className="text-center">Популярные товары</h2>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="online-sale-item">
          <NavLink className="link link_third" to="/teachers">
          <div className="main-sections-item item1_1"></div>
          </NavLink>
          <NavLink className="link link_third" to="/teacher01">
            <p className="main-sections-lesson">Магазин "Золушок</p>
          </NavLink>
          <NavLink className="link link_third" to="/courses_case">
            <p className="main-sections-heading">Набор первоклассника</p>
          </NavLink>
            <p className="main-sections-description"><strong>Стоимость: </strong>1 100₽</p>
 

        </GridCol>

        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item2_1"></div>
          </NavLink>
          <NavLink className="link link_third" to="/teacher">
            <p className="main-sections-lesson">Новости</p>
          </NavLink>
          <NavLink className="link link_third" to="/course01">
            <p className="main-sections-heading">Фалеристика 2020</p>
          </NavLink>
            <p className="main-sections-description"><strong>Стоимость: </strong>130 000₽</p>

        </GridCol>

        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item5_1"></div>
          </NavLink>
          <NavLink className="link link_third" to="/teacher">
            <p className="main-sections-lesson">Дом и интерьер</p>
          </NavLink>
          <NavLink className="link link_third" to="/course01">
            <p className="main-sections-heading">


Мебель</p>
          </NavLink>
            <p className="main-sections-description"><strong>Стоимость: </strong>130 000₽</p>
          

        </GridCol>

        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">

          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item6_1"></div>
          </NavLink>
          <NavLink className="link link_third" to="/teacher">
            <p className="main-sections-lesson">Домашние питомцы</p>
          </NavLink>
          <NavLink className="link link_third" to="/course01">
            <p className="main-sections-heading">«Собаки»</p>
          </NavLink>
            <p className="main-sections-description"><strong>Стоимость: </strong>130 000₽</p>

        </GridCol>



        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
          <NavLink className="link link_third" to="/course01">
          <div className="main-sections-item item3_1"></div>
          </NavLink>
          <NavLink className="link link_third" to="/teacher">
            <p className="main-sections-lesson">Магазин «Фалеристики»</p>
          </NavLink>
          <NavLink className="link link_third" to="/course01">
            <p className="main-sections-heading">Знак Ордена Святого Станислава III</p>
          </NavLink>
            <p className="main-sections-description"><strong>Стоимость: </strong>130 000₽</p>
          

        </GridCol>

        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item4_1"></div>
          </NavLink>
          <NavLink className="link link_third" to="/teacher01">
            <p className="main-sections-lesson">Магазин "Золушок"</p>
          </NavLink>
          <NavLink className="link link_third" to="/course">
            <p className="main-sections-heading">Набор первоклассника ErichKrause</p>
          </NavLink>
            <p className="main-sections-description"><strong>Стоимость: </strong>1 100₽</p>
          

        </GridCol>


      </GridRow>





	    <div className="main-sections1">
      <h2 className="text-center main-sections1">Популярные категории товаров</h2>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/teachers">
          <div className="main-sections-item item1">
            <p className="main-sections-lesson">Весенний декор</p>
            <p className="main-sections-heading">Букеты</p>
            <p className="main-sections-description">Букеты для любого интерьера</p>
          </div>

          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item2">
            <p className="main-sections-lesson">Новости</p>
            <p className="main-sections-heading">Фалеристика 2020</p>
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
          <NavLink className="link link_third" to="/courses01">
          <div className="main-sections-item item3">
            <p className="main-sections-lesson">Антиквариат и коллекции</p>
            <p className="main-sections-heading">«Фалеристика»</p>
            <p className="main-sections-description">Огромная коллекция медалей, 
орденов и других нагрудных 
знаков</p>
    
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item4">
            <p className="main-sections-lesson">Для детей</p>
            <p className="main-sections-heading">

Развивающие игрушки</p>
            <p className="main-sections-description">Погремушки, кубики, книжки,
раскраски и многое другое</p>
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item5">
            <p className="main-sections-lesson">Дом и интерьер</p>
            <p className="main-sections-heading">


Мебель</p>
            <p className="main-sections-description">Мебель для вашего дома</p>
          </div>
          </NavLink>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
          <NavLink className="link link_third" to="/course">
          <div className="main-sections-item item6">
            <p className="main-sections-lesson">Домашние питомцы</p>
            <p className="main-sections-heading">«Собаки»</p>
            <p className="main-sections-description">Игрушки, корма и многое другое</p>
          </div>
          </NavLink>
        </GridCol>
      </GridRow>
</div>

      <div className="text-center m-t10">
        <Button className="button button_secondary">Еще</Button>
      </div>
    </div>
  );
};
