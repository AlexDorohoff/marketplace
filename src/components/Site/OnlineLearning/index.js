import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import HomeLogo1 from '../../../theme/images/home/home-logo1.jpg';
import HomeLogo2 from '../../../theme/images/home/home-logo2.jpg';
import HomeLogo3 from '../../../theme/images/home/home-logo3.jpg';
import './styles.scss';

/**
 * Online learning
 */
export default function OnlineLearning() {
  return (
    <div className="online-learning">
      <h2 className="text-center">Нас выбирают</h2>
      <p>
        Маркетплейс «Море», входит в группу компаний являеющихся многолетними партнерами российских предприятий
        представляющих самые разнообразные сферы экономической деятельности. За счет принятых в компаниях
        требований и подходов к качеству, надежности и кретериям взаимодействия с клиентом, нам удалось создать
        в маркетплейсе «Море» уникальную дружескую среду основанную на оптимальном балансе интересесов
        покупателя и владельца товара, отраженном в честном коммерческом предложении.
      </p>
      <h4 className="text-center">Наши партнеры</h4>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="online-learning-item">
          <a href="http://moevse.ru/">
            <img src={HomeLogo1} alt="" />
          </a>
          <p className="online-learning">
            <a href="http://moevse.ru/">Мое Все</a>
            <br />
            <br />
            Сайт, на котором собраны 
            лучшие интернет-ресурсы для вас и вашей семьи.
          </p>        
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="online-learning-item">
          <a href="/teacher">
            <img src={HomeLogo2} alt="" />
          </a>
          <p>
            <a href="/teacher">Магазин фалеристики Шолохова</a>
            <br />
            Большая коллекция знаков и медалей по самым распространенным тематикам.
          </p>        
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="online-learning-item">
          <a href="http://moevse.ru/">
            <img src={HomeLogo3} alt="" />
          </a>
          <p>
            <a href="http://moevse.ru/">Мое Все</a>
            <br />
            <br />
            Сайт, на котором собраны 
            лучшие интернет-ресурсы для вас и вашей семьи.
          </p>        
        </GridCol>
      </GridRow>
    </div>
  );
};
