import React, { useState } from 'react';
// import Loadable from 'react-loadable';
import Button from 'arui-feather/button';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import CountDown from '../CountDown/CountDown';
import ImgChat1 from '../../../theme/images/account/img-chat1.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import ModalTeacherMessage from '../Forms/ModalTeacherMessage';
// import TasksWaiting from '../../../theme/images/account/tasks-waiting.svg';
import Dialog from '../../Common/Dialog';
import TeacherRequests from '../TeacherRequests';
import './styles.scss';

/**
 * Teacher academic plan
 */
const TeacherAcademicPlan = ({ profile }) => {
  const [openPanelNumber, setOpenPanelNumber] = useState(0);
  const [idOpenModal, setIdOpenModal] = useState('');

  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };


  return (
    <div className="teacheracadem">
      {/* <ExpansionPanelR
        className="teacheracadem-item"
        title={
          <div className="teacheracadem-calendar">
            <div className="teacheracadem-calendar-title">
              Календарь и Расписание
            </div>
            <div className="teacheracadem-calendar-waiting">
              Ожидание заданий
            </div>
            <div className="teacheracadem-calendar-amount">3</div>
            <div className="teacheracadem-calendar-pic">
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
            <LoadableTeacherCalendar profileData={profile} />
          </div>
        }
      /> */}
      <ExpansionPanelR
        className="teacheracadem-item"
        title={
          <div className="teacheracadem-lesson">
            <div className="teacheracadem-lesson-title">Доставка</div>
            {/* <div className="teacheracadem-lesson-theme">Тема</div> */}
            <div className="teacheracadem-lesson-subject">Велосипед BMW</div>
            <div className="teacheracadem-lesson-timer">
              <CountDown date="2020-06-25 15:47:00" />
            </div>
            <div className="teacheracadem-lesson-button">
              <Button className="button button_settings-form">
                Отправлено
              </Button>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 2}
        onClickExpand={() => handleClickExpand(2)}
        content={
          <div className="teacheracadem-lesson-detail">
            <div className="teacheracadem-lesson-nearest">
              Ближайшая доставка
            </div>
            {/* <div className="teacheracadem-lesson-theme1">Тема</div> */}
            <div className="teacheracadem-lesson-subject1">Велосипед BMW</div>
            <div className="teacheracadem-lesson-header">
              <GridRow>
                <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} />
                <GridCol width={{ mobile: 10, tablet: 4, desktop: 4 }}>
                  Покупатель
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
                  Дата / Время
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  Осталось
                </GridCol>
              </GridRow>
            </div>
            <div className="teacheracadem-lesson-schedule">
              <GridRow>
                <GridCol width={{ mobile: 2, tablet: 2, desktop: 1 }}>
                  <img src={ImgChat1} alt="" />
                </GridCol>
                <GridCol width={{ mobile: 10, tablet: 2, desktop: 3 }}>
                  rain Man
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 2, desktop: 3 }}>
                  2020-05-25 11:30
                </GridCol>
                <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
                  <CountDown date="2020-06-25 15:47:00" />
                </GridCol>
              </GridRow>
            </div>
            <div className="teacheracadem-lesson-buttons">
              <Button
                className="button button_settings-message"
                onClick={() => setIdOpenModal('teacherMessage')}
              >
                Сообщение
              </Button>
              <Button className="button button_settings-form">
                Отправить
              </Button>
              <Button className="button button_settings-cancel">
                Отмена заказа
              </Button>
            </div>
            <div className="teacheracadem-lesson-detail-title">
              <div className="teacheracadem-lesson-detail-1">#</div>
              <div className="teacheracadem-lesson-detail-2">Дата / Время</div>
              <div className="teacheracadem-lesson-detail-3">
                Покупатель
              </div>
              <div className="teacheracadem-lesson-detail-4">Товар</div>
              <div className="teacheracadem-lesson-detail-5">Сумма</div>
              <div className="teacheracadem-lesson-detail-6">Статус</div>
            </div>
            <div className="teacheracadem-lesson-detail-data">
              <div className="teacheracadem-lesson-detail-1">132</div>
              <div className="teacheracadem-lesson-detail-2">
                2020-06-25 11:30
              </div>
              <div className="teacheracadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Rain Man
              </div>
              <div className="teacheracadem-lesson-detail-4">Велосипед BMW</div>
              <div className="teacheracadem-lesson-detail-5">4500₽</div>
              <div className="teacheracadem-lesson-detail-6">Принят</div>
            </div>
            <div className="teacheracadem-lesson-detail-data">
              <div className="teacheracadem-lesson-detail-1">131</div>
              <div className="teacheracadem-lesson-detail-2">
                2020-09-01 13:30
              </div>
              <div className="teacheracadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                ООО “Акелла”
              </div>
              <div className="teacheracadem-lesson-detail-4">Мячи регбийные</div>
              <div className="teacheracadem-lesson-detail-5">50000₽</div>
              <div className="teacheracadem-lesson-detail-6">Принят</div>
            </div>
            <div className="teacheracadem-lesson-detail-data">
              <div className="teacheracadem-lesson-detail-1">130</div>
              <div className="teacheracadem-lesson-detail-2">
                2020-06-01 13:30
              </div>
              <div className="teacheracadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Rain Man
              </div>
              <div className="teacheracadem-lesson-detail-4">Гироскутер</div>
              <div className="teacheracadem-lesson-detail-5">11500₽</div>
              <div className="teacheracadem-lesson-detail-6">Выполнен</div>
            </div>
            <div className="teacheracadem-lesson-detail-data">
              <div className="teacheracadem-lesson-detail-1">129</div>
              <div className="teacheracadem-lesson-detail-2">
                2020-05-31 13:30
              </div>
              <div className="teacheracadem-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Rain Man
              </div>
              <div className="teacheracadem-lesson-detail-4">Ракетка HEAD</div>
              <div className="teacheracadem-lesson-detail-5">15000₽</div>
              <div className="teacheracadem-lesson-detail-6">Выполнен</div>
            </div>
            <Link pseudo>
              <div className="teacheracadem-lessons-button">
                <Button className="button button_secondary">
                  Показать ещё
                </Button>
              </div>
            </Link>
          </div>
        }
      />
      <ExpansionPanelR
        className="teacheracadem-item"
        title={
          <div className="teacheracadem-request">
            <div className="teacheracadem-request-title">Заявки</div>
            <div className="teacheracadem-request-amount">133</div>
            {/* <div className="teacheracadem-request-theme">Тема</div> */}
            <div className="teacheracadem-request-literature">
              <ul>
                <li>Велосипед Ferrari</li>
                <li>17000 руб.</li>
              </ul>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 3}
        onClickExpand={() => handleClickExpand(3)}
        content={<TeacherRequests />}
      />
      <Dialog
        isOpen={idOpenModal === 'teacherMessage'}
        onClose={() => setIdOpenModal('')}
        title="Сообщение"
      >
        <ModalTeacherMessage />
      </Dialog>
    </div>
  );
};

export default TeacherAcademicPlan;
