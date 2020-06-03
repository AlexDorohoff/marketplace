import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import CheckBox from 'arui-feather/checkbox';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Attantion from '../../../../theme/images/account/attantion.svg';

/**
 * Modal3 form
 */
export default function StudentForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="modal13-form">
      <div className="modal_attantion">
        <div className="modal_attantion-pic">
          <Link pseudo><img src={Attantion} alt="" /></Link>
        </div>
        <div className="modal_attantion-txt">
            Пожалуйста выберите файл для загрузки на сервер. Обратите
            внимание, что размер файла не может превышать 5 мегабайт.
        </div>
        <div className="modal-input">
          <Input
            id="fileupload"
            name="myFile"
            className="file-load"
            type="file"
          />
        </div>
        <div className="form-field">
          <CheckBox
            id="filedoc"
            text="Файл является Документом и будет отображаться в Вашем профиле."
          />
        </div>
        <div className="form-field">
          <CheckBox
            id="filemat"
            text="Файл является обучающим Материалом и будет отображаться в каталоге  курса."
          />
        </div>
        <div className="modal_attantion-buttons">
          <div className="text-center">
            <Button className="button button_cancel">Отменить</Button>
          </div>
          <div className="text-center">
            <Button className="button button_upload">Загрузить</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
