import React, { useState } from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { NavLink } from 'react-router-dom';
import ModalTeacherReviewAnswer from '../Forms/ModalTeacherReviewAnswer';
import Button from 'arui-feather/button';
import Avatar from '../../../theme/images/account/img-chat2.svg';
import Heart from '../../../theme/images/account/pic-heart.svg';
import Dots from '../../../theme/images/account/pic-dots.svg';
import Star from '../../../theme/images/account/pic-star4.svg';
import Dialog from "../../Common/Dialog";

/**
 * Teacher review
 */
export default function TeacherReview() {
  const [idOpenModal, setIdOpenModal] = useState(0);
  const handleCloseModal = () => setIdOpenModal(0);
  const handleOpenModal = idModal => setIdOpenModal(idModal);

  return (
    <div className="teacherreview">
      <GridRow className="teacherreview-block-body">
        <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
          <h1>Отзывы</h1>
        </GridCol>
        <GridCol width={{ mobile: 6, tablet: 6, desktop: 6 }}>
          <div className="teacherreview-attantion">
            <div className="teacherreview-rule">
              <Link pseudo>Правила публикации отзывов</Link></div>
          </div>
        </GridCol>
      </GridRow>
      <div className="teacherreview-rating">
        4,9
      </div>
      <div className="teacherreview-graph">
        <div className="teacherreview-graph-5">
          <div className="teacherreview-graph-value">5</div>
          <progress value="85" max="100" />
        </div>
        <div className="teacherreview-graph-4">
          <div className="teacherreview-graph-value">4</div>
          <progress value="65" max="100" />
        </div>
        <div className="teacherreview-graph-3">
          <div className="teacherreview-graph-value">3</div>
          <progress value="45" max="100" />
        </div>
        <div className="teacherreview-graph-2">
          <div className="teacherreview-graph-value">2</div>
          <progress value="35" max="100" />
        </div>
        <div className="teacherreview-graph-1">
          <div className="teacherreview-graph-value">1</div>
          <progress value="5" max="100" />
        </div>
      </div>

      <div className="teacherreview-task-wrap">
        <div className="teacherreview-task">
          Тема
        </div>
        <div className="teacherreview-task1">
          <NavLink className="teacherreview-course" to="/course">Поэзия «серебрянного» века</NavLink>
        </div>
      </div>

      <GridRow className="teacherreview-block-head">
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-avatar">
            <img className="" src={Avatar} alt="" />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 10, tablet: 10, desktop: 10 }}>
          <div className="teacherreview-message-user">
            <span className="teacherreview-message-userdata">Пользователь Google</span>
            25 августа 2019 г.
            <div>
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
            </div>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-user">
            <img className="teacherreview-message-heart" src={Heart} alt="" />
            <img className="teacherreview-message-dots" src={Dots} alt="" />
            <div className="teacherreview-message-count">
              9999
            </div>
          </div>
        </GridCol>
      </GridRow>
      <p>
        Фильм-сказка. Иногда так устаешь от очередного фильма, где у всех все хорошо, все рады и счастливы, все остаются вместе в конце и тому подобное. Этот же фильм(наконец-то) показал нечто другое. Он показал мечту, к которой стоит стремиться, показал сказку о том, что люди встречаются-люди влюбляются. Д…
      </p>
      <GridRow className="teacherreview-block-body">
        <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }}>
          <div className="teacherreview-detail">
            <Link pseudo>Подробнее ...</Link>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 7, tablet: 7, desktop: 7 }} />
        <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
          <div className="teachercourse-detail-btn">
            <Button type="submit" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Ответить</Button>
          </div>
        </GridCol>
      </GridRow>
      <Dialog isOpen={idOpenModal === 1} onClose={handleCloseModal} title="Ответ на отзыв">
        <ModalTeacherReviewAnswer />
      </Dialog>


      <GridRow className="teacherreview-block-head">
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-avatar">
            <img className="" src={Avatar} alt="" />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 10, tablet: 10, desktop: 10 }}>
          <div className="teacherreview-message-user">
            <span className="teacherreview-message-userdata">Пользователь Google</span>
            25 августа 2019 г.
            <div>
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
            </div>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-user">
            <img className="teacherreview-message-heart" src={Heart} alt="" />
            <img className="teacherreview-message-dots" src={Dots} alt="" />
            <div className="teacherreview-message-count">
              9999
            </div>
          </div>
        </GridCol>
      </GridRow>
      <p>
        Фильм-сказка. Иногда так устаешь от очередного фильма, где у всех все хорошо, все рады и счастливы, все остаются вместе в конце и тому подобное. Этот же фильм(наконец-то) показал нечто другое. Он показал мечту, к которой стоит стремиться, показал сказку о том, что люди встречаются-люди влюбляются. Д…
      </p>
      <GridRow className="teacherreview-block-body">
        <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }}>
          <div className="teacherreview-detail">
            <Link pseudo>Подробнее ...</Link>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 7, tablet: 7, desktop: 7 }} />
        <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
          <div className="teachercourse-detail-btn">
            <Link pseudo>
              <Button type="submit" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Ответить</Button>
            </Link>
          </div>
        </GridCol>
      </GridRow>


      <GridRow className="teacherreview-block-head">
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-avatar">
            <img className="" src={Avatar} alt="" />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 10, tablet: 10, desktop: 10 }}>
          <div className="teacherreview-message-user">
            <span className="teacherreview-message-userdata">Пользователь Google</span>
            25 августа 2019 г.
            <div>
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
            </div>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-user">
            <img className="teacherreview-message-heart" src={Heart} alt="" />
            <img className="teacherreview-message-dots" src={Dots} alt="" />
            <div className="teacherreview-message-count">
              9999
            </div>
          </div>
        </GridCol>
      </GridRow>
      <p>
        Фильм-сказка. Иногда так устаешь от очередного фильма, где у всех все хорошо, все рады и счастливы, все остаются вместе в конце и тому подобное. Этот же фильм(наконец-то) показал нечто другое. Он показал мечту, к которой стоит стремиться, показал сказку о том, что люди встречаются-люди влюбляются. Д…
      </p>
      <GridRow className="teacherreview-block-body">
        <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }}>
          <div className="teacherreview-detail">
            <Link pseudo>Подробнее ...</Link>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 7, tablet: 7, desktop: 7 }} />
        <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
          <div className="teachercourse-detail-btn">
            <Link pseudo>
              <Button type="submit" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Ответить</Button>
            </Link>
          </div>
        </GridCol>
      </GridRow>


      <GridRow className="teacherreview-block-head">
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-avatar">
            <img className="" src={Avatar} alt="" />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 10, tablet: 10, desktop: 10 }}>
          <div className="teacherreview-message-user">
            <span className="teacherreview-message-userdata">Пользователь Google</span>
            25 августа 2019 г.
            <div>
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
              <img className="" src={Star} alt="" />
            </div>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }}>
          <div className="teacherreview-message-user">
            <img className="teacherreview-message-heart" src={Heart} alt="" />
            <img className="teacherreview-message-dots" src={Dots} alt="" />
            <div className="teacherreview-message-count">
              9999
            </div>
          </div>
        </GridCol>
      </GridRow>
      <p>
        Фильм-сказка. Иногда так устаешь от очередного фильма, где у всех все хорошо, все рады и счастливы, все остаются вместе в конце и тому подобное. Этот же фильм(наконец-то) показал нечто другое. Он показал мечту, к которой стоит стремиться, показал сказку о том, что люди встречаются-люди влюбляются. Д…
      </p>
      <GridRow className="teacherreview-block-body">
        <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }}>
          <div className="teacherreview-detail">
            <Link pseudo>Подробнее ...</Link>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 7, tablet: 7, desktop: 7 }} />
        <GridCol width={{ mobile: 3, tablet: 3, desktop: 3 }}>
          <div className="teachercourse-detail-btn">
            <Link pseudo>
              <Button type="submit" className="button button_settings-form" onClick={() => handleOpenModal(1)}>Ответить</Button>
            </Link>
          </div>
        </GridCol>
      </GridRow>
    </div>
  );
}
