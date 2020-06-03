import React, { useState } from 'react';
import Type from 'prop-types';
import './styles.scss';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Link from 'arui-feather/link';
import { NavLink } from 'react-router-dom';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import moment from 'moment';
import 'moment/locale/ru';
// import Pencil from '../../../theme/images/account/pencil.svg';
// import Eye from '../../../theme/images/account/eye.svg';
import PicSort from '../../../theme/images/account/pic-sort.svg';

/**
 * Student course
 */
const StudentCourse = ({ items = [], name = '' }) => {
  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="studentcourse">
      <ExpansionPanelR
        className="studentcourse-item"
        title={
          <div className="studentcourse-block">
            <div className="studentcourse-create">
              <GridRow>
                <GridCol
                  width={{ mobile: 12, tablet: 9, desktop: 9 }}
                  className="form-field"
                >
                  <ul>
                    {items.map(item => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </GridCol>
                <GridCol
                  width={{ mobile: 12, tablet: 9, desktop: 3 }}
                  className="form-field right-poz"
                >
                  <NavLink className="" to="/courses">
                    <div className="studentcourse-create-btn">
                      <Button
                        type="submit"
                        className="button button_settings-form"
                      >
                        Добавить в корзину
                      </Button>
                    </div>
                  </NavLink>
                </GridCol>
              </GridRow>
            </div>
          </div>
        }
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={
          <div>
            <div>
              <div className="studentcourse-create-list">Список товаров</div>
              <div className="studentcourse-create-date">
                {moment().format('dddd, D MMMM YYYY г.')}
              </div>
            </div>
            {/* <div className="studentcourse-create-teacher">Студент</div>
            <div className="studentcourse-create-lname">{name}</div> */}

            <div className="studentcourse-create-sum">
              <div className="studentcourse-create-total">ВСЕГО товаров</div>
              <div className="studentcourse-create-amount">{items.length}</div>
              <div className="studentcourse-create-total">На сумму</div>
              <div className="studentcourse-create-amount">{items.length}</div>
            </div>

            <table className="studentcourse-table">
              <tbody>
                <tr className="studentcourse-table-head">
                  <td>Наименование</td>
                  <td>
                    Продавец
                    <Link pseudo>
                      <img
                        className="studentcourse-table-picsort"
                        src={PicSort}
                        alt=""
                      />
                    </Link>
                  </td>
                  <td>
                    Количество
                    <Link pseudo>
                      <img
                        className="studentcourse-table-picsort"
                        src={PicSort}
                        alt=""
                      />
                    </Link>
                  </td>
                  <td>
                    Стоимость
                    <Link pseudo>
                      <img
                        className="studentcourse-table-picsort"
                        src={PicSort}
                        alt=""
                      />
                    </Link>
                  </td>
                </tr>
                {/* {items.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>Литература</td>
                      <td>Барышева С.В.</td>
                      <td>2019-08-25 11:30</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
};

StudentCourse.propTypes = {
  name: Type.string.isRequired,
  items: Type.array.isRequired,
};

export default StudentCourse;
