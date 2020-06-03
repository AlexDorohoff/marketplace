import React from 'react';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import { MdPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaOdnoklassniki,
  FaVk,
} from 'react-icons/fa';
import './styles.scss';
import { Link, NavLink } from 'react-router-dom';

/**
 * Footer for home page
 */
export default function Footer() {
  return (
    <div className="footer_wrapper  footer__content__disclaimer">
      <footer className="footer-main">
        <section className="section section_fullwidth">
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
              <div className="footer-main-first">Карта сайта</div>
              <Link to="/pravila-of-our-house">Как мы работает?</Link>
              <br />
              <Link to="/pravila-of-our-house">С чего начать?</Link>
              <br />
              <Link to="/third-party-policies">О нас</Link>
              <br />
              <Link to="/third-party-policies">Контакты</Link>
              <br />
              <Link to="/third-party-policies">Отзывы о магазинах</Link>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }}>
              <div className="footer-main-second">
                <Link to="/pravila-of-our-house">Политика Нашего Дома</Link>
                <br />
                <Link to="/privacy-policy">Политика конфиденциальности</Link>
                <br />
                <Link to="/terms-of-uses">Правила использования</Link>
                <br />
                <Link to="/policy-cookie">Файлы Cookie и аналогичные технологии</Link>
                <br />
                <Link to="/info">Новости</Link>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
              <div className="footer-main-first">Свяжитесь с нами</div>
              <AiOutlineMail style={{ margin: '0 3px -2px 0' }} />
              <a href="mailto:adress@yandex.ru">adress@yandex.ru</a>
              <br />
              <MdPhone style={{ margin: '0 3px -2px 0' }} />
              <a href="tel:+81234567891">8 (123) 456-78-91</a>
              <br />
              <MdPhone style={{ margin: '0 3px -2px 0' }} />
              <a href="tel:+81987653412">8 (198) 765-34-12</a>
              <div className="footer-soc">
                <div className="footer-soc-title">Мы в соцсетях</div>
                <a href="https://vk.com">
                  <FaVk />
                </a>
                <a href="https://facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https://ok.ru">
                  <FaOdnoklassniki />
                </a>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com">
                  <FaYoutube />
                </a>
              </div>
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
              ®
              {' '}
              {' '}
              © 2020 ООО «СТП-Лаб» Все права защищены.
            </GridCol>
          </GridRow>
          <div className="hr1" />
          <GridRow>
            <GridCol className="footer-main-cookies" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
              Для повышения удобства работы с сайтом «Море»
              {' '}
              <NavLink
                to="/soglasie-na-obrabotku-dannyh-152-fz"
                className="footer_cookies_link"
              >
                используются файлы cookie.
              </NavLink>
              {' '}               
              В cookie содержатся данные о прошлых посещениях сайта. Если вы не хотите, чтобы эти данные 
              обрабатывались, отключите cookie в настройках браузера. С полной информацией о политике
              в применении «Файлов Cookie и аналогичных технологий» можно ознакомиться
              {' '} 
              <a className="footer_cookies_link" href="/policy-cookie">здесь.</a>
            </GridCol>
          </GridRow>
        </section>
      </footer>
    </div>
  );
}
