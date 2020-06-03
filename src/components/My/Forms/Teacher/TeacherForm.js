import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Textarea from 'arui-feather/textarea';
import './styles.scss';
import Link from 'arui-feather/link';
import Vk from '../../../../theme/images/account/vk.svg';
import Twitter from '../../../../theme/images/account/twitter.svg';
import Facebook from '../../../../theme/images/account/facebook.svg';
import Telegram from '../../../../theme/images/account/telegram.svg';
import Viber from '../../../../theme/images/account/viber.svg';
import Whatsapp from '../../../../theme/images/account/whatsapp.svg';
import Instagram from '../../../../theme/images/account/instagram.svg';
import Youtube from '../../../../theme/images/account/youtube.svg';
import Ok from '../../../../theme/images/account/ok.svg';
import ImageUploadField from '../../../Common/ImageUploadField';
import Pencil from '../../../../theme/images/account/pencil.svg';
import Addbutton from '../../../../theme/images/account/addbutton.svg';
import DocsBrowser from '../../../Common/DocsBrowser';
import { files } from '../../../../core/utils/testData';
import Modal from '../../../Common/Modal';

/**
 * Request form
 */
export default function TeacherForm({
  history,
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  setSubmitting,
  isSubmitting,
  dirty,
}) {
  const onModalClose = () => {
    setSubmitting(false);
    if (Object.keys(errors).length === 0) {
      history.push('/my/teacher1');
    }
  };

  const handleSubmitModal = () => {
    setSubmitting(false);
    if (Object.keys(errors).length !== 0 && !errors.global) {
      const elem = document.querySelector('.input__sub');
      elem && elem.parentElement.scrollIntoView();
    } else {
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmitModal();
      }}
      className="teacher-form"
    >
      <div className="teacher-form-container">
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            <div className="input-title">Название витрины</div>
            <Input
              id="name"
              placeholder="ФИО"
              value={values.name}
              onChange={value => setFieldValue('name', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.name && touched.name && <span>{errors.name}</span>}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field text-center"
          >
            <ImageUploadField
              name="teacher"
              descr="Фото"
              imageUrl={values.image}
              onChange={value => setFieldValue('image', value.file)}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="input-title">Опыт работы*</div>
            <div className="experience-input">
              <Input
                id="experience"
                placeholder="999"
                mask="111"
                value={values.experience}
                onChange={value => setFieldValue('experience', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.experience &&
                  touched.experience && <span>{errors.experience}</span>
                }
                disabled={isSubmitting}
                className="number-input"
              />
            </div>
            <div className="input-title">Мобильный телефон</div>
            <Input
              id="phone"
              type="tel"
              mask="+7-111-111-11-11"
              value={values.phone}
              onChange={value => setFieldValue('phone', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.phone && touched.phone && <span>{errors.phone}</span>
              }
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 8, desktop: 8 }}
            className="form-field"
          >
            <div className="input-title">О себе*</div>
            <div className="edo-textarea">
              <Textarea
                name="edo"
                maxLength = {200}
                id="edo"
                placeholder="Краткое описание"
                value={values.edo}
                onChange={value => setFieldValue('edo', value)}
                onBlur={handleBlur}
                error={errors.edo && touched.edo && <span>{errors.edo}</span>}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>

        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="">
            <div className="input-title">Социальные сети</div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Vk} alt="" />
              </div>
              <Input
                id="vk"
                placeholder="ВКонтакте"
                value={values.vk}
                onChange={value => setFieldValue('vk', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.vk && touched.vk && <span>{errors.vk}</span>}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Twitter} alt="" />
              </div>
              <Input
                id="twitter"
                placeholder="Twitter"
                value={values.twitter}
                onChange={value => setFieldValue('twitter', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.twitter &&
                  touched.twitter && <span>{errors.twitter}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Facebook} alt="" />
              </div>
              <Input
                id="facebook"
                placeholder="Facebook"
                value={values.facebook}
                onChange={value => setFieldValue('facebook', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.facebook &&
                  touched.facebook && <span>{errors.facebook}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Telegram} alt="" />
              </div>
              <Input
                id="telegram"
                placeholder="Telegram"
                value={values.telegram}
                onChange={value => setFieldValue('telegram', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.telegram &&
                  touched.telegram && <span>{errors.telegram}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Viber} alt="" />
              </div>
              <Input
                id="viber"
                placeholder="Viber"
                value={values.viber}
                onChange={value => setFieldValue('viber', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.viber && touched.viber && <span>{errors.viber}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Whatsapp} alt="" />
              </div>
              <Input
                id="whatsapp"
                placeholder="WhatsApp"
                type="tel"
                mask="+7-111-111-11-11"
                value={values.whatsapp}
                onChange={value => setFieldValue('whatsapp', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.whatsapp &&
                  touched.whatsapp && <span>{errors.whatsapp}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Instagram} alt="" />
              </div>
              <Input
                id="instagram"
                placeholder="Instagram"
                value={values.instagram}
                onChange={value => setFieldValue('instagram', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.instagram &&
                  touched.instagram && <span>{errors.instagram}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Youtube} alt="" />
              </div>
              <Input
                id="youtube"
                placeholder="YouTube"
                value={values.youtube}
                onChange={value => setFieldValue('youtube', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.youtube &&
                  touched.youtube && <span>{errors.youtube}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 4, desktop: 4 }}
            className="form-field"
          >
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Ok} alt="" />
              </div>
              <Input
                id="ok"
                placeholder="Одноклассники"
                value={values.ok}
                onChange={value => setFieldValue('ok', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.ok && touched.ok && <span>{errors.ok}</span>}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <h2>О витрине</h2>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="yourself">
              <Textarea
                name="yourself"
                id="yourself"
                maxLength = {200}
                placeholder="Краткое описание"
                value={values.yourself}
                onChange={value => setFieldValue('yourself', value)}
                onBlur={handleBlur}
                error={
                  errors.yourself &&
                  touched.yourself && <span>{errors.yourself}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="yourself">
              <textarea
                name="yvideo"
                id="yvideo"
                placeholder="Загрузите видео"
                value={values.yvideo}
                onChange={value => setFieldValue('yvideo', value)}
                onBlur={handleBlur}
                error={
                  errors.yvideo &&
                  touched.yvideo && <span>{errors.yvideo}</span>
                }
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        {/* <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 9, desktop: 9 }}
            className="form-field"
          >
            Расписание
            <Input
              id="shedule"
              placeholder="Создать расписание"
              value={values.shedule}
              onChange={value => setFieldValue('shedule', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.shedule &&
                touched.shedule && <span>{errors.shedule}</span>
              }
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 3, desktop: 3 }}
            className="form-field"
          >
            <div className="teacher-form-controls">
              <Link pseudo>
                <img src={Addbutton} alt="" />
              </Link>
              <Link pseudo>
                <img src={Eye} alt="" />
              </Link>
              <Link pseudo>
                <img src={Pencil} alt="" />
              </Link>
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <CheckBox id="shedulepro" text="Создать «Расписание PRO»" />
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <CheckBox id="shedulestudent" text="Создать «Расписание STUDENT»" />
          </GridCol>
        </GridRow> */}
        <DocsBrowser
          title="Документы"
          files={files}
          value={values.documents}
          setFieldValue={setFieldValue}
        />
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 10, desktop: 10 }}
            className="form-field"
          >
            Добавить раздел(отдел)
            <Input
              id="newdiscipl"
              placeholder="Раздел не выбран"
              value={values.newdiscipl}
              onChange={value => setFieldValue('newdiscipl', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.newdiscipl &&
                touched.newdiscipl && <span>{errors.newdiscipl}</span>
              }
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 2, desktop: 2 }}
            className="form-field"
          >
            <div className="teacher-form-controls">
              <Link pseudo>
                <img src={Addbutton} alt="" />
              </Link>
              <Link pseudo>
                <img src={Pencil} alt="" />
              </Link>
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 12, desktop: 12 }}
            className="form-field"
          >
            {/* <CheckBox id="disconnect" text="Отключить «Расписание PRO» " /> */}
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="input-title">Смена пароля</div>
            <Input
              id="pwd"
              placeholder="Новый пароль"
              value={values.pwd}
              onChange={value => setFieldValue('pwd', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.pwd && touched.pwd && <span>{errors.pwd}</span>}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol
            width={{ mobile: 12, tablet: 6, desktop: 6 }}
            className="form-field"
          >
            <div className="input-title">&nbsp;</div>
            <Input
              id="pwd1"
              placeholder="Подтвердите пароль"
              value={values.pwd1}
              onChange={value => setFieldValue('pwd1', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.pwd1 && touched.pwd1 && <span>{errors.pwd1}</span>}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <div className="teacher-form-action">
          <Button
            type="submit"
            className="button button_default button_modal"
            disabled={isSubmitting || !dirty}
          >
            Сохранить
          </Button>
        </div>
      </div>
      <Modal
        open={isSubmitting}
        title={
          Object.keys(errors).length === 0
            ? 'Профиль успешно сохранен'
            : errors.global
        }
        onClose={onModalClose}
      >
        <br />
        <div
          style={{
            minWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            className="button button_default button_modal"
            onClick={onModalClose}
          >
            Ок
          </Button>
        </div>
      </Modal>
    </form>
  );
}
