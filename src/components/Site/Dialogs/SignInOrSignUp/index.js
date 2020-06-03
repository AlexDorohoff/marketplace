import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Type from 'prop-types';
import Tabs from 'arui-feather/tabs';
import TabItem from 'arui-feather/tab-item';
import Modal from '../../../Common/Modal';
import SignInForm from '../../Forms/SignInForm';
import SignUpForm from '../../Forms/SignUpForm';
import { loginSuccess } from '../../../../core/actions/session';
import './styles.scss';

export default function SignInOrSignUpDialog({ open = false, onClose }) {

  const dispatch = useDispatch();
  const [formType, setFormType] = useState('signIn');

  const handleClickTab = _formType => (event) => {
    event.preventDefault();
    setFormType(_formType);
  };

  const handleOnLogin = (data) => {
    dispatch(loginSuccess(data));
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      focusTrapped
      classNames={{ overlay: 'dialog-overlay', modal: 'dialog-modal dialog_small', closeButton: 'dialog-close-button' }}
    >
      <div className="dialog_sign">
        <div className="dialog-header">
          <Tabs>
            <TabItem onClick={handleClickTab('signIn')} checked={formType === 'signIn'}>
              Авторизация
            </TabItem>
            <TabItem onClick={handleClickTab('signUp')} checked={formType === 'signUp'}>
              Регистрация
            </TabItem>
          </Tabs>
        </div>
        <div className="dialog-body">
          {formType === 'signIn' && <SignInForm onLogin={handleOnLogin} />}
          {formType === 'signUp' && <SignUpForm onLogin={handleOnLogin} />}
        </div>
      </div>
    </Modal>
  );
}

SignInOrSignUpDialog.propTypes = {
  open: Type.bool,
  onClose: Type.func.isRequired,
};
