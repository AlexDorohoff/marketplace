import React from 'react';
import { useHistory } from 'react-router-dom';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import HomeLogo7 from '../../../theme/images/home/home-logo7.png';
import HomeLogo8 from '../../../theme/images/home/home-logo8.png';
import HomeLogo9 from '../../../theme/images/home/home-logo9.png';
import './styles.scss';

/**
 * Where to begin
 */
export default function WhereToBegin() {
  const history = useHistory();
  return (
    <div className="where-to-begin">
      <h2 className="text-center">С чего начать?</h2>
      <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        <GridCol
          width={{ mobile: 12, tablet: 4, desktop: 4 }}
          className="where-to-begin-item"
        >
          <img src={HomeLogo7} alt="" />
          <p className="where-to-begin-item-heading">Шаг 1</p>
          <p className="where-to-begin-item-description">
            Зайдите в каталог товаров. Выберите раздел и необходимую продукцию.
          </p>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 4, desktop: 4 }}
          className="where-to-begin-item"
        >
          <img src={HomeLogo8} alt="" />
          <p className="where-to-begin-item-heading">Шаг 2</p>
          <p className="where-to-begin-item-description">
            Выберите удобный для Вас способ общения. Запросите необходимую информацию.
          </p>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 4, desktop: 4 }}
          className="where-to-begin-item"
        >
          <img src={HomeLogo9} alt="" />
          <p className="where-to-begin-item-heading">Шаг 3</p>
          <p className="where-to-begin-item-description">
            Приготовьте возникщие у вас вопросы и задайте их владельцу товара.
          </p>
        </GridCol>
      </GridRow>
      <div className="text-center m-t10">
        <Button
          className="button button_secondary"
          onClick={() => history.push('/courses')}
        >
          Начать
        </Button>
      </div>
    </div>
  );
}
