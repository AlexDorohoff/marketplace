import React, { useState } from 'react';
import Type from 'prop-types';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import Loadable from 'react-loadable';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import './styles.scss';
// import TasksWaiting from '../../../theme/images/account/tasks-waiting.svg';
import ImgChat1 from '../../../theme/images/account/img-chat1.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
// import PicAttantion from '../../../theme/images/account/pic-attantion.svg';
import Dialog from '../../Common/Dialog';
import ModalStudentMessage from '../Forms/ModalStudentMessage';
import CountDown from '../CountDown/CountDown';

/**
 * Student academic plan
 */
const StudentAcademicPlan = ({ items = [] }) => {
  const [openPanelNumber, setOpenPanelNumber] = useState(0);
  const [idOpenModal, setIdOpenModal] = useState('');

  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  const LoadableStudentCalendar = Loadable({
    loader: () => import('../../My/StudentCalendar'),
    loading() {
      return <div>Loading...</div>;
    },
  });

  return (
    <div className="studentacadem">
      {/* <ExpansionPanelR
        className="studentacadem-item"
        title={
          <div className="studentacadem-calendar">
            <div className="studentacadem-calendar-title">
              Календарь и Расписание
            </div>
            <div className="studentacadem-calendar-waiting">
              Ожидание заданий
            </div>
            <div className="studentacadem-calendar-amount">3</div>
            <div className="studentacadem-calendar-pic">
              <Link pseudo>
                <img className="" src={TasksWaiting} alt="" />
              </Link>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <LoadableStudentCalendar />
          </div>
        }
      /> */}
      <ExpansionPanelR
        className="studentacadem-item"
        title={
          <div className="studentacadem-lesson">
            <div className="studentacadem-lesson-title">Доставка</div>
            {/* <div className="studentacadem-lesson-theme">Сжигатель жира</div> */}
            <div className="studentacadem-lesson-subject">Сжигатель жира</div>
            <div className="studentacadem-lesson-timer">
              <CountDown date="2020-06-25 15:47" />
            </div>
            <div className="studentacadem-lesson-button">
              <Button className="button button_settings-form">
                Доставлено
              </Button>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 2}
        onClickExpand={() => handleClickExpand(2)}
        content={
          <div className="studentacadem-lesson-detail">
            <div className="studentacadem-lesson-nearest">
              Ближайшая доставка
            </div>
            <div className="studentacadem-lesson-theme1">Доставка</div>
            <div className="studentacadem-lesson-subject1">Сжигатель жира</div>
            <div className="studentacadem-lesson-header">
              <GridRow>
                <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} />
                <GridCol width={{ mobile: 10, tablet: 4, desktop: 4 }}>
                  Продавец
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
                  Дата / Время
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  Осталось
                </GridCol>
              </GridRow>
            </div>
            <div className="studentacadem-lesson-schedule">
              <GridRow>
                <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }}>
                  <img className="" src={ImgChat1} alt="" />
                </GridCol>
                <GridCol width={{ mobile: 10, tablet: 4, desktop: 4 }}>
                  Магазин «Золушок»
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
                  2020-06-25 11:30
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  <CountDown date="2020-06-30 15:47" />
                </GridCol>
              </GridRow>
            </div>

            <div className="studentacadem-lesson-buttons">
              <Button
                className="button button_settings-message"
                onClick={() => setIdOpenModal('studentMessage')}
              >
                Сообщение
              </Button>
              <Button className="button button_settings-form">
                Доставлено
              </Button>
              <Button className="button button_settings-cancel">
                Отмена покупки
              </Button>
            </div>

            <div className="studentacadem-lesson-detail-title">
              <div className="studentacadem-lesson-detail-1">#</div>
              <div className="studentacadem-lesson-detail-2">Дата / Время</div>
              <div className="studentacadem-lesson-detail-3">
                Продавец
              </div>
              <div className="studentacadem-lesson-detail-4">Товар</div>
              <div className="studentacadem-lesson-detail-5">Сумма</div>
              <div className="studentacadem-lesson-detail-6">Статус</div>
            </div>
            <div className="studentacadem-lesson-detail-data">
              <div className="studentacadem-lesson-detail-1">12</div>
              <div className="studentacadem-lesson-detail-2">
                2020-06-25 11:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Сжигатель жира</div>
              <div className="studentacadem-lesson-detail-5">1500₽</div>
              <div className="studentacadem-lesson-detail-6">Принят</div>
            </div>
            <div className="studentacadem-lesson-detail-data">
              <div className="studentacadem-lesson-detail-1">11</div>
              <div className="studentacadem-lesson-detail-2">
                2020-05-01 13:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Чай целебный</div>
              <div className="studentacadem-lesson-detail-5">1000₽</div>
              <div className="studentacadem-lesson-detail-6">Принят</div>
            </div>
            <div className="studentacadem-lesson-detail-data">
              <div className="studentacadem-lesson-detail-1">10</div>
              <div className="studentacadem-lesson-detail-2">
                2020-04-01 13:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Массажер</div>
              <div className="studentacadem-lesson-detail-5">500₽</div>
              <div className="studentacadem-lesson-detail-6">Принят</div>
            </div>
            <div className="studentacadem-lesson-detail-data">
              <div className="studentacadem-lesson-detail-1">09</div>
              <div className="studentacadem-lesson-detail-2">
                2020-04-01 13:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Велосипедки</div>
              <div className="studentacadem-lesson-detail-5">1500₽</div>
              <div className="studentacadem-lesson-detail-6">Принят</div>
            </div>

            <Link pseudo>
              <div className="studentacadem-lessons-button">
                <Button className="button button_secondary">
                  Показать ещё
                </Button>
              </div>
            </Link>
          </div>
        }
      />
      <ExpansionPanelR
        className="studentacadem-item"
        title={
          <div className="studentacadem-request">
            <div className="studentacadem-request-title">Заявки</div>
            <div className="studentacadem-request-amount">14</div>
            {/* <div className="studentacadem-request-theme">Скакалка</div> */}
            <div className="studentacadem-request-literature">
              <ul>
                <li>Скакалка</li>
                <li>350 руб.</li>
              </ul>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 3}
        onClickExpand={() => handleClickExpand(3)}
        content={
          <div className="studentacadem-request-detail">
            <div className="studentacadem-lesson-detail-title">
              <div className="studentacadem-lesson-detail-1">#</div>
              <div className="studentacadem-lesson-detail-2">Дата / Время</div>
              <div className="studentacadem-lesson-detail-3">Продавец</div>
              <div className="studentacadem-lesson-detail-4">Товар</div>
              <div className="studentacadem-lesson-detail-5">Сумма</div>
              <div className="studentacadem-lesson-detail-6">Статус</div>
            </div>
            {/* <div className="studentacadem-reguest-detail-dataheader">
              <div className="studentacadem-lesson-detail-1">14</div>
              <div className="studentacadem-lesson-detail-2">
                <div className="studentacadem-lesson-theme1">Тема</div>
                <div className="studentacadem-lesson-subject1">
                  <span>Скакалка</span>
                </div>
                <div className="studentacadem-lesson-subject1">
                  Поэзия “серебрянного” века.
                </div>
              </div>
            </div> */}
            <div className="studentacadem-reguest-detail-data">
              {/* <div className="studentacadem-lesson-detail-1" /> */}
              <div className="studentacadem-lesson-detail-1">14</div>
              <div className="studentacadem-lesson-detail-2 marked-red">
                2020-08-25 11:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Беговки</div>
              <div className="studentacadem-lesson-detail-5">1500₽</div>
              <div className="studentacadem-lesson-detail-6 marked-red">
                Отклонен
              </div>
            </div>

            {/* <div className="studentacadem-reguest-detail-dataheader">
              <div className="studentacadem-lesson-detail-1">15</div>
              <div className="studentacadem-lesson-detail-2">
                <div className="studentacadem-lesson-theme1">Тема</div>
                <div className="studentacadem-lesson-subject1">
                  <span>Русский язык</span>
                </div>
                <div className="studentacadem-lesson-subject1">
                  Сильные и слабые позиции.
                </div>
              </div>
            </div> */}
            <div className="studentacadem-reguest-detail-data">
              {/* <div className="studentacadem-lesson-detail-1" /> */}
              <div className="studentacadem-lesson-detail-1">15</div>
              <div className="studentacadem-lesson-detail-2 marked-green">
                2020-08-25 11:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Сжигатель жира</div>
              <div className="studentacadem-lesson-detail-5">1500₽</div>
              <div className="studentacadem-lesson-detail-6 marked-green">
                Принят
              </div>
            </div>

            {/* <div className="studentacadem-reguest-detail-dataheader">
              <div className="studentacadem-lesson-detail-1">16</div>
              <div className="studentacadem-lesson-detail-2">
                <div className="studentacadem-lesson-theme1">Тема</div>
                <div className="studentacadem-lesson-subject1">
                  <span>Литература</span>
                </div>
                <div className="studentacadem-lesson-subject1">
                  Творчество Маяковского
                </div>
              </div>
            </div> */}
            <div className="studentacadem-reguest-detail-data">
              {/* <div className="studentacadem-lesson-detail-1" /> */}
              <div className="studentacadem-lesson-detail-1">16</div>
              <div className="studentacadem-lesson-detail-2 marked-grey">
                2020-08-25 11:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Живая сода</div>
              <div className="studentacadem-lesson-detail-5">1000₽</div>
              <div className="studentacadem-lesson-detail-6 marked-grey">
                Заявка
              </div>
            </div>

            {/* <div className="studentacadem-reguest-detail-dataheader">
              <div className="studentacadem-lesson-detail-1">17</div>
              <div className="studentacadem-lesson-detail-2">
                <div className="studentacadem-lesson-theme1">Тема</div>
                <div className="studentacadem-lesson-subject1">
                  <span>Литература</span>
                </div>
                <div className="studentacadem-lesson-subject1">
                  “Золотой период русской позии”
                </div>
                <div className="studentacadem-lesson-attantion">
                  <Link pseudo>
                    <img className="" src={PicAttantion} alt="" />
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="studentacadem-reguest-detail-data">
              {/* <div className="studentacadem-lesson-detail-1" /> */}
              <div className="studentacadem-lesson-detail-1">17</div>
              <div className="studentacadem-lesson-detail-2 marked-orange">
                2020-08-25 11:30
              </div>
              <div className="studentacadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="studentacadem-lesson-detail-4">Каша</div>
              <div className="studentacadem-lesson-detail-5">1000₽</div>
              <div className="studentacadem-lesson-detail-6 marked-orange">
                Перенесен
              </div>
            </div>
            <Link pseudo>
              <div className="studentacadem-lessons-button">
                <Button className="button button_secondary">
                  Показать ещё
                </Button>
              </div>
            </Link>
          </div>
        }
      />
      <Dialog
        isOpen={idOpenModal === 'studentMessage'}
        onClose={() => setIdOpenModal('')}
        title="Сообщение"
      >
        <ModalStudentMessage />
      </Dialog>
    </div>
  );
};

StudentAcademicPlan.propTypes = {
  items: Type.array.isRequired,
};

export default StudentAcademicPlan;
