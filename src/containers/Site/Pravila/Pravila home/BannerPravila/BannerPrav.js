import React, { useRef, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';



import { NavLink } from 'react-router-dom';
import './styles.scss';

const BannerPrav = () => {
  return (

     <>
        <Helmet>
          <title>Море</title>
          <meta name="description" content="Море" />
          <meta name="keywords" content="Море" />
        </Helmet>
        <section className="section section_fullwidth">
          <div className="teacher01">
            <GridRow>
              <GridCol width={{ mobile: 0, tablet: 6 }} />
              <GridCol width={{ mobile: 12, tablet: 6 }}>
                <div className="teacher-about">
                  <h1>Магазин<br />«Золушок»
                  </h1>
                  <div className="teacher-expir">Стаж: 30 лет на рынке</div>
                  <div className="teacher-expir">Мы собираем заказы прямо со своего оптового склада, что позволяет быстро их выполнять...</div>

                  <div className="teacher-subject">
                  Канцелярские товары
                    <br />
                  Сувенирная продукция 
                    <br />
                  Персональные подарки
                    <br />


              <GridCol width={{ mobile: 12, tablet: 6 }}>

      <div className="search">
        <input type="search" width="available" name="q" placeholder="Поиск" />
        <input type="submit" value="" />
      </div>

              </GridCol>


                  </div>
                </div>
              </GridCol>




            </GridRow>
          </div>
        </section>




      </>
  );
};

export default BannerPrav;
