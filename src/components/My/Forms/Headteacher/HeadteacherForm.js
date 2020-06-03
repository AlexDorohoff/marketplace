import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import PhoneInput from 'arui-feather/phone-input';
import './styles.scss';
import Link from 'arui-feather/link';
import CheckBox from 'arui-feather/checkbox';
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
import Eye from '../../../../theme/images/account/eye.svg';
import Addbutton from '../../../../theme/images/account/addbutton.svg';
import DocsBrowser from "../../../Common/DocsBrowser";
import {files} from "../../../../core/utils/testData";

/**
 * Request form
 */
export default function HeadteacherForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="teacher-form">
      <div className="teacher-form-container">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="form-field">
            <div className="input-title">
              Фамилия, Имя, Отчество
            </div>
            <Input
              id="name"
              placeholder="ФИО"
              value={values.name}
              onChange={value => setFieldValue('name', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.name && touched.name && (<span>{errors.name}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="form-field text-center">
            <ImageUploadField name="teacher" descr="Фото" />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="form-field">
            <div className="input-title">
              Наименование учебного учреждения
            </div>
            <Input
              id="nameorg"
              placeholder="Наименование"
              value={values.nameorg}
              onChange={value => setFieldValue('name-org', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.nameorg && touched.nameorg && (<span>{errors.nameorg}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <div className="input-title">
              Мобильный телефон
            </div>
            <PhoneInput
              id="phone"
              // placeholder="Номер телефона"
              value={values.phone}
              onChange={value => setFieldValue('phone', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.phone && touched.phone && (<span>{errors.phone}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }} className="form-field">
            <div className="input-title">
              Электронная почта
            </div>
            <Input
              id="email"
              placeholder="e-mail"
              value={values.email}
              onChange={value => setFieldValue('email', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.email && touched.email && (<span>{errors.email}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="">
            <div className="input-title">
              Социальные сети
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.vk && touched.vk && (<span>{errors.vk}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.twitter && touched.twitter && (<span>{errors.twitter}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.facebook && touched.facebook && (<span>{errors.facebook}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.telegram && touched.telegram && (<span>{errors.telegram}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.viber && touched.viber && (<span>{errors.viber}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Whatsapp} alt="" />
              </div>
              <Input
                id="whatsapp"
                placeholder="WhatsApp"
                value={values.whatsapp}
                onChange={value => setFieldValue('whatsapp', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.whatsapp && touched.whatsapp && (<span>{errors.whatsapp}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.instagram && touched.instagram && (<span>{errors.instagram}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <div className="soc-input">
              <div className="soc-pic">
                <img src={Youtube} alt="" />
              </div>
              <Input
                id="youtube"
                placeholder="YouTube"
                value={values.viber}
                onChange={value => setFieldValue('youtube', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.youtube && touched.youtube && (<span>{errors.youtube}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
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
                error={errors.ok && touched.ok && (<span>{errors.ok}</span>)}
                disabled={isSubmitting}
              />
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
            <div className="input-title">
              Смена пароля
            </div>
            <Input
              id="pwd"
              placeholder="Новый пароль"
              value={values.pwd}
              onChange={value => setFieldValue('pwd', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.pwd && touched.pwd && (<span>{errors.pwd}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
            <div className="input-title">
              &nbsp;
            </div>
            <Input
              id="pwd1"
              placeholder="Подтвердите пароль"
              value={values.pwd1}
              onChange={value => setFieldValue('pwd1', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.pwd1 && touched.pwd1 && (<span>{errors.pwd1}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
        </GridRow>
        <div className="teacher-form-action">
          <Button type="submit" className="button button_default button_modal" disabled={isSubmitting}>Сохранить</Button>
        </div>
      </div>
    </form>
  );
}
