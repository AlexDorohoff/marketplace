import React from 'react';
import Link from 'arui-feather/link';
import {NavLink} from 'react-router-dom';
import Toplink1 from '../../../theme/images/toplink1.png';
import Toplink2 from '../../../theme/images/toplink2.png';
import Toplink3 from '../../../theme/images/toplink3.png';
import Toplink4 from '../../../theme/images/toplink4.png';
import Toplink5 from '../../../theme/images/toplink5.png';
import './styles.scss';

export default function TopLinks() {
  return (
    <div className="top-links-wrap">
      <section className="section section_fullwidth section_top">
        <div className="top-links">
          <ul>
            <li>
              <NavLink to="/pravila-of-our-house" className='link link_size_m'>
                <img src={Toplink1} alt="Как это работает" />
                &nbsp;Как это работает
              </NavLink>
            </li>
            <li>
              <NavLink to="/pravila-of-our-house" className='link link_size_m'>
                <img src={Toplink2} alt="С чего начать" />
                &nbsp;С чего начать
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy-client" className='link link_size_m'>
                <img src={Toplink3} alt="Покупателям" />
                &nbsp;Покупателям
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy-experts" className='link link_size_m'>
                <img src={Toplink4} alt="Продавцам" />
                &nbsp;Продавцам
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className='link link_size_m'>
                <img src={Toplink5} alt="Форум" />
                &nbsp;Форум
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
