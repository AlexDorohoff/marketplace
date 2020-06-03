import React from 'react';
import Button from 'arui-feather/button';
import './styles.scss';
import ImgChat2 from '../../../../theme/images/account/img-chat2.svg';

/**
 * Teacher Review Answer
 */
export default function TeacherReviewAnswerForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="ReviewAnswer">
      <div className="review-data">
        <div className="review-data-pic">
          <img className="" src={ImgChat2} alt="" />
        </div>

        <div className="review-data-user">
          <span>Пользователь Google</span>
          <br />
          25 августа 2019 г.
        </div>
        <div className="review-data-txt">
        Фильм-сказка. Иногда так устаешь от очередного фильма, где у всех все хорошо, все рады и счастливы, все остаются вместе в конце и тому подобное. Этот же фильм(наконец-то) показал нечто другое. Он показал мечту, к которой стоит стремиться, показал сказку о том, что люди встречаются-люди влюбляются. Д…
        </div>
      </div>
      <div className="review-answer-title">
        Ответ
      </div>
      <div className="review-textarea">
        <textarea
          name="reviewanswer"
          id="reviewanswer"
          placeholder="Введите ответ на отзыв"
          value={values.reviewanswer}
          onChange={value => setFieldValue('reviewanswer', value)}
          onBlur={handleBlur}
          error={errors.reviewanswer && touched.reviewanswer && (<span>{errors.reviewanswer}</span>)}
          disabled={isSubmitting}
        />
      </div>


      <div className="teachercard-modal-button">
        <Button className="button button_settings-cancel">Отменить</Button>
        <Button className="button button_settings-form">Отправить</Button>
      </div>


    </form>
  );
}
