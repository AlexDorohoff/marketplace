import React, { Component } from 'react';
import './styles.scss';

export default class BannerPravv extends Component {
  render() {
    const { title, optitle, descrip } = this.props;
    return (
      <div className="banner-containers">
        <div className="banner-container__try"></div>
        <div className="banner-container__title">
          <p className="banner-title">
            <u>{title}</u>
          </p>
          <p className="banner-optitle">{optitle}</p>
          <p className="banner-description">{descrip}</p>
        </div>
        <div className="searchf">
          <input type="search" name="q" placeholder="Поиск" />
          <input type="submit" value="" />
        </div>
      </div>
    );
  }
}
