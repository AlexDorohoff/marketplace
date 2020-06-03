import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default function PravilaTile() {
  return (
    <div className="main-sections">
      <div className="main-sections">
        <h2 className="text-center main-sections">Правила для нашего сообщества</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-experts">
              <div className="main-sections-item pol1">
                <br />
                <br />
                <br />
                <br />
                <p className="main-sections-heading">Продавцы</p>
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-client">
              <div className="main-sections-item pol2">
                <br />
                <br />
                <br />
                <br />
                <p className="main-sections-heading">Покупатели</p>
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
            <NavLink className="link link_third" to="/third-party-policies">
              <div className="main-sections-item pol5">
                <br />
                <br />
                <br />
                <br />
                <p className="main-sections-heading">Третьи лица</p>
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }} className="m-b20">
            <NavLink className="link link_third" to="/policy-cookie">
              <div className="main-sections-item pol6">
                <br />
                <br />
                <br />
                <br />
                <p className="main-sections-heading">Сookie</p>
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/privacy-policy">
              <div className="main-sections-item pol3">
                <br />
                <br />
                <br />
                <br />
                <p className="main-sections-heading">Политика конфиденциальности</p>
              </div>
            </NavLink>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="m-b20">
            <NavLink className="link link_third" to="/terms-of-use">
              <div className="main-sections-item pol4">
                <br />
                <br />
                <br />
                <br />
                <p className="main-sections-heading">Правила использования</p>
              </div>
            </NavLink>
          </GridCol>
        </GridRow>
      </div>
    </div>
  );
}
