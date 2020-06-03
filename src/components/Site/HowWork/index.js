import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import HowWorkImage from '../../../theme/images/how-work.jpg';
import './styles.scss';

/**
 * How work
 */
export default function HowWork() {
  return (
    <div className="how_work">
      <h2 className="how_work-title">Как работает сервис «Море»</h2>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 6 }}>
          <img className="how_work-image" src={HowWorkImage} alt="" />
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6 }}>
          <div className="how_work-content">
            <p className="bold18">
              Все, что вам понадобиться, это:
            </p>
            <p>
              Связаться с нами. Наши консультанты и менеджеры работают с пользователями в максимально удобных для
              них условиях. Общение проходит с использованием всех возможных средств коммуникаций. Вам не надо
              беспокоиться о способах оплаты, оформления документов, погрузке, доставке купленного товара.
            </p>
            <p className="bold18">
              Все это обеспечивает маркетплейс «Море»!
            </p>
          </div>
        </GridCol>
      </GridRow>
    </div>
  );
};
