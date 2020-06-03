import React from 'react';
import Link from 'arui-feather/link';
import './styles.scss';
import Closemodal from '../../../../theme/images/account/closemodal2.svg';

/**
 * Modal2 form
 */
export default function StudentForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <>
      <div className="modal_err">
        <div className="modal_err-pic">
          <Link pseudo><img src={Closemodal} alt="" /></Link>
        </div>
        <div className="modal_err-txt">
        Файл не был загружен на сервер. Размер файла может превышать 5 мегабайт.
        </div>
      </div>
    </>
  );
}
