import React from 'react';
import './styles.scss';
import Modalmap1 from '../../../../theme/images/account/modalmap1.svg';

export default function Modal8() {
  return (
      <div className="modal8">
          <div className="modal8-address">
          Москва, ул Островитянова, д.16
          </div>
          <img src={Modalmap1} className="modal8-map" alt="" />
      </div>
  );
}
