import React from 'react';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Textarea from 'arui-feather/textarea';
import './styles.scss';

/**
 * Student course request form
 */
export default function ModalStudentCourseRequest({
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  isSubmitting,
  onClose,
}) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="StudentCourseRequest-modal">
        <h1>{values.title}</h1>
        <h3>{`Цена: ${values.price} руб.`}</h3>

        <div className="StudentCourseRequest-modal-pickers">
          <div className="divDateTime">
            <label htmlFor="dt">Дата</label>
            <Input
              type="date"
              id="dt"
              name="date"
              value={values.date}
              onChange={value => setFieldValue('date', value)}
              onBlur={handleBlur}
              error={errors.date && touched.date && <span>{errors.date}</span>}
            />
          </div>
          <div className="divDateTime">
            <label htmlFor="tm">Время</label>
            <Input
              type="time"
              id="tm"
              name="time"
              value={values.time}
              onChange={value => setFieldValue('time', value)}
              onBlur={handleBlur}
              error={errors.time && touched.time && <span>{errors.time}</span>}
            />
          </div>
        </div>
        <div className="msg">
          <label>Сообщение преподавателю</label>
          <Textarea
            minRows={3}
            name="message"
            value={values.message}
            onChange={value => setFieldValue('message', value)}
          />
        </div>
      </div>

      <div className="StudentCourseRequest-modal-button">
        <Button
          type="submit"
          className="button button_settings-form"
          disabled={isSubmitting}
        >
          Купить
        </Button>
        <Button className="button button_settings-cancel" onClick={onClose}>
          Отменить
        </Button>
      </div>
    </form>
  );
}
