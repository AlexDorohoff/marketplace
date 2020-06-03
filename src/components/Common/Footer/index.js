import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { MdPhone } from 'react-icons/md';
import Faq from '../../../theme/images/faq.svg';
import './styles.scss';
import { NavLink } from 'react-router-dom';

/**
 * Footer
 */
export default function Footer() {
  return (
    <div className="footer_wrapper footer__content__disclaimer">
      <footer className="footer footer-first">
        <section className="section section_fullwidth">
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
              <div>«Море»</div>
              ®
              {' '}
              &copy;
              {' '}
              2020 ООО «СТП-Лаб»
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
              <div className="footer-center">
                <div>
                  <NavLink className="footer-first" to="/pravila-of-our-house">
                    Правила Нашего Дома
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/terms-of-use">
                    Правила использования
                  </NavLink>
                </div>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
              <div className="footer-center">
                <div>
                  <NavLink to="/privacy-policy">Конфиденциальность</NavLink>
                </div>
                <div>
                  <NavLink
                    to="/policy-cookie"
                  >
                    Файлы cookie
                  </NavLink>
                </div>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
              <div className="footer-faq">
                <img src={Faq} alt="" />
              </div>
              <div className="footer-third">
                <p>
                  Остались вопросы? Задайте их нам
                  &nbsp;
                  <b>
                    <a className="footer_cookies_link" href="/checkout">здесь.</a>
                  </b>
                </p>
                <p>
                  <MdPhone style={{ margin: '0 3px -2px 0' }} />
                  <a href="tel:+71987653412">+7 (198) 765-34-12</a>
                </p>
              </div>
            </GridCol>
          </GridRow>
        </section>
      </footer>
    </div>
  );
}
