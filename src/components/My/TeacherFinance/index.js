import React, { useState } from 'react';
import Type from 'prop-types';
// import Link from 'arui-feather/link';
import { NavLink } from 'react-router-dom';

import ExpansionPanelR from '../../Common/ExpansionPanelR';
import ImgPurse from '../../../theme/images/img-purse.svg';
// import StatTeacher from '../../../theme/images/account/stat-teacher.jpg';
import Dialog from '../../Common/Dialog';
import ModalTeacherCard from '../Forms/ModalTeacherCard';
import SelectOperation from '../../Common/SelectOperation';
import SelectDateRange from '../../Common/SelectDateRange';
import '../../../theme/styles/settings.scss';

/**
 * Teacher finance
 */
const TeacherFinance = ({ items = [] }) => {

  const [openPanelNumber, setOpenPanelNumber] = useState(0);
  const [idOpenModal, setIdOpenModal] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: new Date(), endDate: new Date() });

  const handleClickExpand = (panelNumber) => {
    const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="finance">
      <ExpansionPanelR
        className="finance-item"
        title={
          <div className="finance-block">
            <div className="finance-block-balance">
              Баланс
            </div>
            <div className="finance-block-price">
              12 000₽
            </div>
            <div className="finance-block-date">
              28.08.2019 г.
            </div>
            <div className="finance-block-pic">
              <div className="finance-block-pic-text">Вывод средств</div>
              <div className="finance-block-pic-img">
                <NavLink 
                  // pseudo
                  // onClick={() => setIdOpenModal('TeacherCard')}
                  to="/under-development"
                >
                  <img className="" src={ImgPurse} alt="" />
                </NavLink>
              </div>
            </div>
            <Dialog isOpen={idOpenModal === 'TeacherCard'} onClose={() => setIdOpenModal('')} title="">
              <ModalTeacherCard />
            </Dialog>
          </div>
        }
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <div className="finance-stat">
              <div className="finance-stat-operation">
                Операции
              </div>
              <div className="finance-stat-action">
                Действия
              </div>
              <span>
                <SelectOperation onChange={(type) => {}}/>
                {/* <span className="select-operation">
                  <span className="select-operation-title">
                    <NavLink to="/under-development">
                      Все операции
                    </NavLink>
                  </span>
                </span> */}
              </span>
            </div>
            <div className="finance-stat">
              <div className="finance-stat-operation">
                Даты
              </div>
              <div className="finance-stat-action">
                Период
              </div>
              <span>
                <SelectDateRange dateRange={dateRange} onChangeRange={dateRange => setDateRange(dateRange)} />
                {/* <span className="select-operation">
                  <span className="select-operation-title">
                    <NavLink to="/under-development">
                      23.03.2020
                    </NavLink>
                  </span>
                </span> */}
              </span>
            </div>
            {/* <img className="" src={StatTeacher} alt="" /> */}
          </div>
        }
      />
    </div>
  );
};

TeacherFinance.propTypes = {
  items: Type.array.isRequired,
};

export default TeacherFinance;
