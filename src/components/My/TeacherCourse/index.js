import React, { useState } from 'react';
import Type from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import { FaPencilAlt, FaEye } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import { NavLink } from 'react-router-dom';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import './styles.scss';

/**
 * Teacher course
 */
const TeacherCourse = ({ name = '', items = [] }) => {
  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = panelNumber => {
    const newOpenPanelNumber =
      openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="teachercourse">
      <ExpansionPanelR
        className="teachercourse-item"
        title={
          <div className="teachercourse-block">
            <div className="teachercourse-create">
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
                  <NavLink className="" to="/my/create-course">
                    <div className="teachercourse-create-btn">
                      <Button
                        type="submit"
                        className="button button_settings-form"
                      >
                        Создать товар
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
              <div className="teachercourse-create-list">Список товаров</div>
              <div className="teachercourse-create-date">
                {moment().format('dddd, D MMMM YYYY г.')}
              </div>
            </div>
            <div className="teachercourse-create-teacher">Продавец</div>
            <div className="teachercourse-create-lname">{name}</div>

            <div className="teachercourse-create-sum">
              <div className="teachercourse-create-total">ВСЕГО товаров</div>
              <div className="teachercourse-create-amount">{items.length}</div>
            </div>

            <table className="teachercourse-table">
              <tbody>
                <tr className="teachercourse-table-head">
                  <td>Наименование</td>
                  <td>Раздел</td>
                  <td>
                    Кол/во,
                    <br />
                    шт.
                  </td>
                  <td>Наличие</td>
                  <td className="teachercourse-table-edit">Доставка</td>
                </tr>
                {items.map(item => {
                  let description;
                  try {
                    description = JSON.parse(item.description);
                  } catch (e) {
                    console.log(e);
                  }
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{description && description.subject}</td>
                      <td className="teachercourse-table-cntr">
                        {description && description.scope}
                      </td>
                      <td>
                        <p>{description && description.schedule}</p>
                      </td>
                      <td className="teachercourse-icons">
                        <NavLink to={`/my/update-good/${item.id}`}>
                          <FaPencilAlt
                            size="18px"
                            className="teachercourse-icon"
                          />
                        </NavLink>
                        <NavLink to={`/my/update-good/${item.id}`}>
                          <MdSettings
                            size="18px"
                            className="teachercourse-icon"
                          />
                        </NavLink>
                        <NavLink to={`/good/${item.id}`}>
                          <FaEye size="18px" className="teachercourse-icon" />
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        }
      />
    </div>
  );
};

TeacherCourse.propTypes = {
  name: Type.string.isRequired,
  items: Type.array.isRequired,
};

export default TeacherCourse;
