import React, { useState } from 'react';
import Type from 'prop-types';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import './styles.scss';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import ModalTeacherTask from '../TeacherStudentsAssignments';

/**
 * Teacher tasks
 */
const TeacherTasks = ({ items = [] }) => {

  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = (panelNumber) => {
    const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="teachertasks">
      <ExpansionPanelR
        className="teachertasks-item"
        title={(
          <div className="teachertasks-element">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Мамиашвили Зураб
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Поэты “серебряного” века. В. Маяковский
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Болотов Михаил
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Глаголы
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                <div className="teachertasks-element-absent">Нет заданий</div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} />
            </GridRow>
          </div>
        )}
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={(
          <div>
            <ModalTeacherTask items={[]} />
          </div>
)}
      />

    </div>
  );
};

TeacherTasks.propTypes = {
  items: Type.array.isRequired,
};

export default TeacherTasks;
