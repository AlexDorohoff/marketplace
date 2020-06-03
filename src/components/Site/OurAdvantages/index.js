import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import HomeLogo4 from '../../../theme/images/home/home-logo4.png';
import HomeLogo5 from '../../../theme/images/home/home-logo5.png';
import HomeLogo6 from '../../../theme/images/home/home-logo6.png';
import './styles.scss';

/**
 * Our advantages
 */
export default function OurAdvantages() {
  return (
    <div className="our-advantages">
      <h2 className="text-center">Наши преимущества</h2>
      <GridRow gutter={ { mobile: 24, tablet: 24, desktop: 24 } }>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="our-advantages-item">
          <Link pseudo><img src={HomeLogo4} alt="" />
            <p className="our-advantages-item-heading">Уникальное все</p></Link>
          <p className="our-advantages-item-description">У нас есть уникальные професионалы и уникальный инструментарий. Вы сможете найти у нас все, что вам нужно для совершения покупки и получения качественной услуги.</p>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="our-advantages-item">
          <Link pseudo><img src={HomeLogo5} alt="" />
          <p className="our-advantages-item-heading">Быстрая доставка</p></Link>
          <p className="our-advantages-item-description">Вы плучаете напрямую экспертизу и визуальную информацию об удаленном товаре или услуге.</p>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="our-advantages-item">
          <Link pseudo><div className="our-advantages-img-6"><img src={HomeLogo6} alt="" /></div>
          <p className="our-advantages-item-heading">Безопасные сделки</p></Link>
          <p className="our-advantages-item-description">Мы используем лучшие в своем классе технологии для защиты ваших сделок.</p>
        </GridCol>
      </GridRow>
    </div>
  );
};
