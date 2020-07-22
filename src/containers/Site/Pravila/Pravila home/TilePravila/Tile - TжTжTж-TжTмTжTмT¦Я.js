import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import Button from 'arui-feather/button';

import { Link } from 'react-router-dom';
import './styles.scss';

const Tile = () => {
  return (
    <div className="tile">
      <div className="tile-container">
        <p>Политика нашего сообщества</p>
        <div className="tile-list">
          <Link to="/policy-experts" className="tile-list__link expert">
            <div className="title-tile">Эксперты</div>
            <div className="descr-tile">Правила для экспертов</div>
          </Link>

          <Link to="/policy-client" className="tile-list__link client">
            <div className="title-tile">Клиенты</div>
            <div className="descr-tile">Правила для клиентов</div>
          </Link>

          <Link
            to="/third-party-policies"
            className="tile-list__link third-party"
          >
            <div className="title-tile">Третьи лица</div>
            <div className="descr-tile">
              Третьи лица политика в отношении файлов cookie
            </div>
          </Link>

          <Link
            to="/privacy-policy"
            className="tile-list__link privacy"
            href="/"
          >
            <div className="title-tile">Политика конфиденциальности</div>
            <div className="descr-tile">Описание</div>
          </Link>

          <Link to="/terms-of-use" className="tile-list__link condition">
            <div className="title-tile">Условия пользования</div>
            <div className="descr-tile">Описание</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Tile;
