import React from 'react';
import Link from 'arui-feather/link';
import './styles.scss';
import Oval from '../../../../theme/images/oval.svg';
import Pencil from '../../../../theme/images/account/pencil.svg';
import Closemodal from '../../../../theme/images/account/closemodal.svg';
import Button from 'arui-feather/button';

/**
 * Modal1 form
 */
export default function StudentForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="modal1-form">
      <div className="discipline-wrap">
        <div className="discipline">
          <div className="discipline-left">
            Дисциплина
            <img src={Oval} className="discipline-dot" alt=""/>
            <span className="bold">Русский Язык</span>
          </div>
          <div className="discipline-right">
            <Link pseudo><img src={Pencil} alt=""/></Link>
            <Link pseudo><img src={Closemodal} className="closemodal-pic" alt=""/></Link>
          </div>
          <div className="clear-both"/>
        </div>
        <div className="about-discipline">
          Курс фокусируется на самых проблемных моментах в русской грамматике.
          <br/>
          Курс учит не только грамотной письменной речи, но и устному языку. Слушатели разберут самые распространенные орфографические и пунктуационные ошибки: использование разных знаков препинания, написание суффиксов, сложных слов с частицами и предлогами-приставками, слитное и раздельное написание слов.
        </div>
        <div className="orange-stripe">
          <div className="orange-time">
            Занятие рассчитано на: <span className="bold">60 минут</span>
          </div>
          <div className="orange-price">
            Стоимость занятия: <span className="bold">1500₽</span>
          </div>
          <div className="clear-both"/>
        </div>
      </div>
      <div className="discipline-wrap">
        <div className="discipline">
          <div className="discipline-left">
            Дисциплина
            <img src={Oval} className="discipline-dot" alt=""/>
            <span className="bold">Литература</span>
          </div>
          <div className="discipline-right">
            <Link pseudo><img src={Pencil} alt=""/></Link>
            <Link pseudo><img src={Closemodal} className="closemodal-pic" alt=""/></Link>
          </div>
          <div className="clear-both"/>
        </div>
        <div className="about-discipline">
          Имею 20-летний опыт работы. Разработала собственную методологию, Являюсь автором нескольких научных статей.<br/>
          Я не просто веду учеников по маршрутам учебных программ, а помогаю ребятам увидеть, почувствовать и сделать своим достоянием поразительное разнообразие мира нашей родной, русской речи.
        </div>
        <div className="orange-stripe">
          <div className="orange-time">
            Занятие рассчитано на: <span className="bold">60 минут</span>
          </div>
          <div className="orange-price">
            <span className="bold">Стоимость занятия: 1500₽</span>
          </div>
          <div className="clear-both"/>
        </div>
      </div>
      <div className="text-center m-t10 discipline-button">
        <Button className="button button_secondary">Показать ещё</Button>
      </div>
    </form>
  );
}
