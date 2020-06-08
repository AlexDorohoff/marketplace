import React, { useState } from 'react';
import Type from 'prop-types';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Link from 'arui-feather/link';
import Loadable from 'react-loadable';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
// import TasksWaiting from '../../../theme/images/account/tasks-waiting.svg';
import ImgChat1 from '../../../theme/images/account/img-chat1.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
// import PicAttantion from '../../../theme/images/account/pic-attantion.svg';
import Dialog from '../../Common/Dialog';
import ModalStudentMessage from '../Forms/ModalStudentMessage';
import CountDown from '../CountDown/CountDown';
import TeacherRequests from '../TeacherRequests';
import '../../../theme/styles/settings.scss';

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
    <div className="academ">
      <ExpansionPanelR
        className="academ-item"
        title={
          <div className="academ-lesson">
            <div className="academ-lesson-title">Доставка</div>
            <div className="academ-lesson-subject">Сжигатель жира</div>
            <div className="academ-lesson-timer">
              <CountDown date="2020-06-25 15:47" />
            </div>
            <div className="academ-lesson-button">
              <Button className="button button_settings-form">
                Доставлено
              </Button>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 2}
        onClickExpand={() => handleClickExpand(2)}
        content={
          <div className="academ-lesson-detail">
            <div className="academ-lesson-nearest">
              Ближайшая доставка
            </div>
            <div className="academ-lesson-subject1">Сжигатель жира</div>
            <div className="academ-lesson-header">
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
            <div className="academ-lesson-schedule">
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
            <div className="academ-lesson-buttons">
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

            {/* <div className="academ-lesson-detail-title">
              <div className="academ-lesson-detail-1">#</div>
              <div className="academ-lesson-detail-2">Дата / Время</div>
              <div className="academ-lesson-detail-3">
                Продавец
              </div>
              <div className="academ-lesson-detail-4">Товар</div>
              <div className="academ-lesson-detail-5">Сумма</div>
              <div className="academ-lesson-detail-6">Статус</div>
            </div>
            <div className="academ-lesson-detail-data">
              <div className="academ-lesson-detail-1">12</div>
              <div className="academ-lesson-detail-2">
                2020-06-25 11:30
              </div>
              <div className="academ-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="academ-lesson-detail-4">Сжигатель жира</div>
              <div className="academ-lesson-detail-5">1500₽</div>
              <div className="academ-lesson-detail-6">Принят</div>
            </div>
            <div className="academ-lesson-detail-data">
              <div className="academ-lesson-detail-1">11</div>
              <div className="academ-lesson-detail-2">
                2020-05-01 13:30
              </div>
              <div className="academ-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="academ-lesson-detail-4">Чай целебный</div>
              <div className="academ-lesson-detail-5">1000₽</div>
              <div className="academ-lesson-detail-6">Принят</div>
            </div>
            <div className="academ-lesson-detail-data">
              <div className="academ-lesson-detail-1">10</div>
              <div className="academ-lesson-detail-2">
                2020-04-01 13:30
              </div>
              <div className="academ-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="academ-lesson-detail-4">Массажер</div>
              <div className="academ-lesson-detail-5">500₽</div>
              <div className="academ-lesson-detail-6">Принят</div>
            </div>
            <div className="academ-lesson-detail-data">
              <div className="academ-lesson-detail-1">09</div>
              <div className="academ-lesson-detail-2">
                2020-04-01 13:30
              </div>
              <div className="academ-lesson-detail-3">
                <img className="" src={ImgChat2} alt="" />
                Магазин «Золушок»
              </div>
              <div className="academ-lesson-detail-4">Велосипедки</div>
              <div className="academ-lesson-detail-5">1500₽</div>
              <div className="academ-lesson-detail-6">Принят</div>
            </div> */}
            <TeacherRequests />


            {/* <Link pseudo>
              <div className="academ-lessons-button">
                <Button className="button button_secondary">
                  Показать ещё
                </Button>
              </div>
            </Link> */}
          </div>
        }
      />
      {/* <ExpansionPanelR
        className="academ-item"
        title={
          <div className="academ-request">
            <div className="academ-request-title">Заявки</div>
            <div className="academ-request-amount">14</div>
            <div className="academ-request-literature">
              <ul>
                <li>Скакалка</li>
                <li>350 руб.</li>
              </ul>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 3}
        onClickExpand={() => handleClickExpand(3)}
        content={<TeacherRequests />}

      /> */}
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
