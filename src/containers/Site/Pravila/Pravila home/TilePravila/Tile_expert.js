import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import './styles_expert.scss';

export default function MainSections() {
  return (
    <div className="main-sections">
      <div className="">
        <h2 className="text-center">Политика продавца</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="m-b20">
            <NavLink className="link link_third" to="/community-policy">
              <div className="main-sections-item expert1">
                <p className="main-sections-heading">Политика сообщества</p>
                <p className="main-sections-description">Правила поведения пользователей маркетплейса «Море»</p>   
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="m-b20">
            <NavLink className="link link_third" to="/NotFound">
              <div className="main-sections-item expert2">
                <p className="main-sections-heading">Политика платежей</p>
                <p className="main-sections-description">Соглашение об использовании платежных сервисов</p>     
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-cookie">
              <div className="main-sections-item expert5">
                <p className="main-sections-heading">Политика файлов Cookie</p>
                <p className="main-sections-description">Соглашение об использовании платежных сервисов</p>     
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/privacy-policy">
              <div className="main-sections-item expert3">
                <p className="main-sections-heading">Политика конфиденциальности</p>
                <p className="main-sections-description">Правила конфеденциальности маркетплейса</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/referral-policy">
              <div className="main-sections-item expert4">
                <p className="main-sections-heading">
                  Реферальная политика
                </p>
                <p className="main-sections-description">Программы и условия бесплатного, льготного размещения листинга товаров и услуг.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/marketing-advertising">
              <div className="main-sections-item expert3">
                <p className="main-sections-heading">Политика рекламы и маркетинга</p>
                <p className="main-sections-description">Способствует продвижению, популяризации и общему распространению продавцов ресурса.</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/forbidden-deal-policy">
              <div className="main-sections-item expert4">
                <p className="main-sections-heading">
                  Политика запрещенных сделок
                </p>
                <p className="main-sections-description">Объяснясняется, что запрещено, не соответствуют нашим ценностям, вредно для наших пользователей.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/anti-discrimination-policy">
              <div className="main-sections-item expert3">
                <p className="main-sections-heading">Антидискриминационная политика</p>
                <p className="main-sections-description">Политика, в которой описываются запреты на поведение пользователей ресурса</p>  
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/intellectual-property-policy">
              <div className="main-sections-item expert4">
                <p className="main-sections-heading">Интеллектуальная собственность и политика ресурса</p>
                <p className="main-sections-description">Требования в отношении прав интеллектуальной собственности.</p> 
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-arbitration">
              <div className="main-sections-item client4">
                <p className="main-sections-heading">
                  Арбитражные правила
                  {' '}
                </p>
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
