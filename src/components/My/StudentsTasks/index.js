import React, { useState } from 'react';
import Type from 'prop-types';
import './styles.scss';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import ExpansionPanelR from '../../Common/ExpansionPanelR';
import ModalStudentTask from '../Forms/ModalStudentTask';

/**
 * Students tasks
 */
const StudentsTasks = ({ items = [] }) => {

  const [openPanelNumber, setOpenPanelNumber] = useState(0);

  const handleClickExpand = (panelNumber) => {
    const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
    setOpenPanelNumber(newOpenPanelNumber);
  };

  return (
    <div className="studentstasks">
      <ExpansionPanelR
        className="studentstasks-item"
        title={(
          <div className="studentstasks-element">
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                    Барышева Светлана Анатольевна
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                  Поэты “серебряного” века. В. Маяковский
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                      Солдатов Михаил Юрьевич
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                      Неправильные английские глаголы.
              </GridCol>
            </GridRow>
            <GridRow>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
                <div className="studentstasks-element-absent">Нет заданий</div>
              </GridCol>
              <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} />
            </GridRow>

          </div>
        )}
        isExpanded={openPanelNumber === 1}
        onClickExpand={() => handleClickExpand(1)}
        content={(
          <div>
            <ModalStudentTask items={[]} />
          </div>
)}
      />

    </div>
  );
};

StudentsTasks.propTypes = {
  items: Type.array.isRequired,
};

export default StudentsTasks;
