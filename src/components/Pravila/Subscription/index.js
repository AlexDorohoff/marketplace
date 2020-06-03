import React, { Component } from 'react';
import './styles.scss';
export default class Subscr extends Component {
  render() {
    return (
      <div className="subscr-container">
        <div className="subscr">
          <p className="subscr-title">
            Получайте информацию о новостях, акциях,
          </p>
          <p className="subscr-title"> бонусах прямо на ваш почтовый ящик</p>
          <form className="subscr-form">
            <input
              type="email"
              className="subscr-email"
              name="e_mail"
              placeholder="Введите адрес электронной почты"
            />
            <br />
            <div>
              <input type="submit" id="subscr-submit" value="Подписаться" />
            </div>
          </form>
          <span className="subscr-oftitle">
            Пожалуйста, введите действительный адрес электронной почты.
          </span>
        </div>
      </div>
    );
  }
}
