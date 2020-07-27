import React, { useState } from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Textarea from 'arui-feather/textarea';
import Link from 'arui-feather/link';
import Type from 'prop-types';
import { MdPlace, MdAddCircleOutline } from 'react-icons/md';
import './styles.scss';
import ImageUploadField from '../../../Common/ImageUploadField';
import DocsBrowser from '../../../Common/DocsBrowser';
import { files } from '../../../../core/utils/testData';
import config from '../../../../config';
import Modal from '../../../Common/Modal';

/**
 * MyCourse form
 */
export default function CourseForm({
  history,
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  isSubmitting,
  setSubmitting,
  dirty
}) {

  const getCreatingErrors = () => {
    return new Promise((resolve) => {
      for (let key in errors) {
        touched[key] = true;
      };
      resolve();
    })
  }

  const onModalClose = () => {
    setSubmitting(false);
    if (Object.keys(errors).length === 0) {
      history.push('/my/lk');
    }
  }

  const handleSubmitModal = () => {
    setSubmitting(false);
    
    if (Object.keys(errors).length !== 0 && !errors.global) {
      getCreatingErrors()
        .then(() => {
          const elem = document.querySelector('.input__sub') || document.querySelector('.textarea__sub');
          elem && elem.parentElement.scrollIntoView();
        });
    } else {
      handleSubmit();
    }
  };

  const handleImageChange = data => {
    setFieldValue('image', data.file);
  };

  const handleTeacherImage = data => {
    setFieldValue('teacherPhoto', data.encodedUrl);
  };

  const [programm, setProgramm] = useState([{ theme: '', materials: [] }]);

  const handleAddTheme = () => {
    const num = programm.length;
    const newProgramm = programm;
    if (newProgramm[num - 1].theme !== '') {
      newProgramm[num] = { theme: '', materials: [] };
      setProgramm(newProgramm);
      setFieldValue('programm', programm);
    }
  };

  const handleCategory = () => {

  }

  const teacherPhoto = () => {
    let result = '';
    if (values.teacherPhoto) {
      if (values.teacherPhoto.length < 50) {
        result = `${config.baseUrl}/avatars/${
          values.teacherPhoto
        }?${Date.now().toString()}`;
      } else {
        result = values.teacherPhoto;
      }
    }
    return result;
  };

  return (
    <form onSubmit={(e) => {e.preventDefault(); handleSubmitModal()}} className="course-form">
      <div className="course-form-container">
        <ImageUploadField
          name="image"
          imageUrl={values.image}
          descr="Картинка титула товара"
          onChange={value => handleImageChange(value)}
        />
        <label htmlFor="coursename">Название товара</label>
        <div className="title-textarea">
          <Input
            required
            name="title"
            maxLength={200}
            id="coursename"
            placeholder="Введите название товара"
            value={values.title}
            onChange={value => setFieldValue('title', value)}
            onBlur={handleBlur}
            error={errors.title && touched.title && <span>{errors.title}</span>}
            disabled={isSubmitting}
          />
        </div>
        <label htmlFor="subject">Раздел (отдел)</label>
        <div className="title-textarea">
          <select
            name="category"
            id="category"
            placeholder="Введите название раздела"
            value={values.category}
            onChange={value => setFieldValue('category', value)}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </div>
        <div className="input-title">Цена товара</div>
        <div className="title-textarea">
          <Input
            name="price"
            id="price"
            mask="111111"
            placeholder="Введите цену товара"
            value={values.price}
            onChange={value => setFieldValue('price', value)}
            onBlur={handleBlur}
            error={errors.price && touched.price && <span>{errors.price}</span>}
            disabled={isSubmitting}
          />
        </div>
        <label htmlFor="annotation">Аннотация товара</label>
        <div className="title-textarea">
          <Input
            name="annotation"
            id="annotation"
            maxLength={200}
            placeholder="Введите аннотацию для товара"
            value={values.annotation}
            onChange={value => setFieldValue('annotation', value)}
            onBlur={handleBlur}
            width="available"
            error={
              errors.annotation &&
              touched.annotation && <span>{errors.annotation}</span>
            }
            disabled={isSubmitting}
          />
        </div>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="input-title">Количество товара:</div>
            <div className="scope-input">
              <Input
                id="scope"
                placeholder="999"
                mask="111"
                value={values.scope}
                onChange={value => setFieldValue('scope', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.scope && touched.scope && <span>{errors.scope}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 8, desktop: 8 }}
            className="form-field"
          >
            <div className="input-title">Срок отгрузки (наличие):</div>
            <Input
              id="schedule"
              placeholder="на складе"
              maxLength={200}
              value={values.schedule}
              onChange={value => setFieldValue('schedule', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.schedule &&
                touched.schedule && <span>{errors.schedule}</span>
              }
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <div className="course-place">
          <label>Место нахождения</label>
          <div className="course-place-input__block_wrapper">
            <div className="course-place-input__block">
              <Input
                id="placemap"
                placeholder="Введите место нахождения товара"
                value={values.placemap}
                maxLength={200}
                onChange={value => setFieldValue('placemap', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.placemap &&
                  touched.placemap && <span>{errors.placemap}</span>
                }
                disabled={isSubmitting}
              />

            </div>
            <MdPlace size="30px" />
          </div>
        </div>
        <h2>О товаре</h2>
        <div className="title-textarea">
          <Input
            id="description"
            name="description"
            maxLength={200}
            placeholder="Введите краткую информацию о товаре"
            value={values.description}
            onChange={value => setFieldValue('description', value)}
            onBlur={handleBlur}
            width="available"
            error={
              errors.description &&
              touched.description && <span>{errors.description}</span>
            }
            disabled={isSubmitting}
          />
        </div>
        <div className="input-title">Особенности:</div>
        <div className="tasks-textarea">
          <Textarea
            required
            name="tasks"
            id="contents"
            maxLength={1200}
            placeholder="Опишите особенности товара. Посмотрите “Образец” заполнения."
            minRows={3}
            value={values.tasks}
            onChange={value => setFieldValue('tasks', value)}
            onBlur={handleBlur}
            error={errors.tasks && touched.tasks && <span>{errors.tasks}</span>}
            disabled={isSubmitting}
          />
        </div>
        <h2>Аудитория товара</h2>
        <div className="duration-textarea">
          <Textarea
            name="courseAuditory"
            maxLength={200}
            id="courseAuditory"
            placeholder="Введите краткую информацию на какую аудиторию ориентирован товар"
            value={values.courseAuditory}
            onChange={value => setFieldValue('courseAuditory', value)}
            onBlur={handleBlur}
            error={
              errors.courseAuditory &&
              touched.courseAuditory && <span>{errors.courseAuditory}</span>
            }
            disabled={isSubmitting}
          />
        </div>

        <h2>О продавце</h2>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 3 }} className="">
            <div className="course-teacherfoto">Фото</div>
            <div className="course-teacherpic">
              <ImageUploadField
                name="teacherPhoto"
                descr=""
                imageUrl={teacherPhoto()}
                onChange={handleTeacherImage}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 9 }} className="">
            <div className="course-teacherfio">Название</div>
            <Input
              className="course-teachername"
              value={values.teachername}
              name="teachername"
              id="teachername"
              maxLength={200}
              onChange={value => setFieldValue('teachername', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.teachername &&
                touched.teachername && <span>{errors.teachername}</span>
              }
              disabled={isSubmitting}
            />
            <Textarea
              minRows={6}
              maxLength={200}
              name="teacherabout"
              placeholder="Введите информациию о продавце. "
              value={values.teacherabout}
              onChange={value => setFieldValue('teacherabout', value)}
              onBlur={handleBlur}
              error={
                errors.teacherabout &&
                touched.teacherabout && <span>{errors.teacherabout}</span>
              }
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>

        <hr className="course-hr" />
        <h2>Характеристики товара</h2>

        {programm.map((item, index) => {
          return (
            <div key={`programm${index}`}>
              <h2>Свойства товара</h2>
              <Textarea
                minRows={4}
                name="programm"
                maxLength={200}
                placeholder="Введите краткое описание"
                value={values.programm ? values.programm[index].theme : ''}
                onChange={value => {
                  let newProgramm = programm;
                  newProgramm[index] = { ...newProgramm[index], theme: value };
                  setProgramm(newProgramm);
                  setFieldValue('programm', programm);
                }}
                onBlur={handleBlur}
                error={
                  errors.programm &&
                  touched.programm && <span>{errors.programm}</span>
                }
                disabled={isSubmitting}
              />

              <DocsBrowser
                title="Галерея товара"
                files={files}
                index={index}
                programm={programm}
                setProgramm={setProgramm}
                setFieldValue={setFieldValue}
              />
            </div>
          );
        })}

        <div className="course-add">
          Добавить свойство
          <Link pseudo>
            <MdAddCircleOutline
              size="30px"
              style={{ margin: '0 0 -10px 5px', color: '#979797' }}
              onClick={() => {
                handleAddTheme();
              }}
            />
          </Link>
        </div>

        <div className="course-form-action">
          <Button
            type="submit"
            className="button button_default"
            disabled={isSubmitting||(! dirty)}
          >
            Сохранить
          </Button>
          <Modal 
            open={isSubmitting}
            title={
              Object.keys(errors).length === 0 ? 'Товар успешно сохранен' : errors.global
            }
            onClose={onModalClose}
          >
            <br />
            <div style={{minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button
                className="button button_default button_modal"
                onClick={onModalClose}
              >
                Ок
              </Button>
            </div>
          </ Modal> 
        </div>
      </div>
    </form>
  );
}

CourseForm.propTypes = {
  values: Type.object.isRequired,
  errors: Type.object.isRequired,
  touched: Type.object.isRequired,
  setFieldValue: Type.func.isRequired,
  handleSubmit: Type.func.isRequired,
  handleBlur: Type.func.isRequired,
  isSubmitting: Type.bool.isRequired,
};
