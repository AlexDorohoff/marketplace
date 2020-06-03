import React, { useState } from 'react';
import Link from 'arui-feather/link';
import './styles.scss';

export default function HeaderMenu({ isOpen, navTo, onClose }) {
  const [ idSubMenu, setIdSubMenu ] = useState('');
  const handleClickMenuItem = (newIdSubMenu) => (event) => {
    event.preventDefault();
    setIdSubMenu(newIdSubMenu !== idSubMenu ? newIdSubMenu : '');
  };
  return (
    <div className={`header-menu-mobile${isOpen ? ' header-menu-mobile-open' : ''}`}>
      <section className="section header-menu-mobile-wrapper">
        <ul className="header-menu-mobile-menu">
          <li>
            <Link pseudo className="link_third" onClick={handleClickMenuItem('subjects')}>Предметы</Link>
            <ul className={`header-menu-mobile-sub-menu ${idSubMenu === 'subjects' ? 'header-menu-mobile-sub-menu-open' : ''}`}>
              <li><Link pseudo>Алгебра</Link></li>
              <li><Link pseudo>Астрономия</Link></li>
              <li><Link pseudo>Биология</Link></li>
              <li><Link pseudo>География</Link></li>
              <li><Link pseudo>ИЗО</Link></li>
              <li><Link pseudo>Иностранный язык</Link></li>
            </ul>
          </li>
          <li><Link pseudo className="link_third">Учебные заведения</Link></li>
          <li>
            <Link pseudo className="link_third" onClick={handleClickMenuItem('teachers')}>Преподаватели</Link>
            <ul className={`header-menu-mobile-sub-menu ${idSubMenu === 'teachers' ? 'header-menu-mobile-sub-menu-open' : ''}`}>
              <li><Link pseudo onClick={navTo('/teachers')}>Все преподаватели</Link></li>
              <li><Link pseudo onClick={navTo('/teacher')}>Барышев<br/>Светлана Валентиновна</Link></li>
              <li><Link pseudo>Браилова<br/>Светлана Аркадьевна</Link></li>
              <li><Link pseudo>Жукова<br/>Людмила Владимировна</Link></li>
              <li><Link pseudo>Сахбутдинова<br/>Роза Салимовна</Link></li>
              <li><Link pseudo>Солдатов<br/>Михаил Юрьевич</Link></li>
            </ul>
          </li>
          <li>
            <Link pseudo className="link_third" onClick={handleClickMenuItem('courses')}>Курсы</Link>
            <ul className={`header-menu-mobile-sub-menu ${idSubMenu === 'courses' ? 'header-menu-mobile-sub-menu-open' : ''}`}>
              <li><Link pseudo onClick={navTo('/courses')}>Все курсы</Link></li>
              <li><Link pseudo onClick={navTo('/course')}>Курс «История России»</Link></li>
              <li><Link pseudo>Курс «Квантовая физика»</Link></li>
              <li><Link pseudo>Курс «Курс по географии для 9 класса (базовый уровень)»</Link></li>
              <li><Link pseudo>Курс «Медико-биологические основы безопасности жизнедеятельности»</Link></li>
            </ul>
          </li>
          <li><Link pseudo className="link_third">F.A.Q.</Link></li>
          <li><Link pseudo className="link_third">О нас</Link></li>
        </ul>
      </section>
    </div>
  )
}
