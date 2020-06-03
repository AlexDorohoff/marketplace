import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DateRange } from 'react-date-range';
import { ru } from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Dialog from '../Dialog';
import Button from 'arui-feather/button';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';

const SelectDateRange = ({ dateRange, onChangeRange }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectedRange, setSelectedRange ] = useState({ startDate: new Date(), endDate: new Date(), key: 'selection', ...dateRange });

  const handleSubmit = (value) => {
    setIsOpen(false);
    if (onChangeRange) onChange(onChangeRange);
  };

  const handleChange = (value) => {
    setSelectedRange(value.selection);
  };

  const startDate = dayjs(selectedRange.startDate).format('DD.MM.YYYY');
  const endDate = dayjs(selectedRange.endDate).format('DD.MM.YYYY');

  return (
    <>
      <span className="select-operation" onClick={() => setIsOpen(true)}>
        <span className="select-operation-title">{startDate === endDate ? startDate : `${startDate} - ${endDate}`}</span>
      </span>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Веберете дату или период">
        <DateRange
          locale={ru}
          onChange={handleChange}
          months={2}
          ranges={[selectedRange]}
          direction="horizontal"
        />
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <div className="text-center studentmessage-modal-button">
              <Button className="button button_settings-form" onClick={handleSubmit}>Применить</Button>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, table: 6, desktop: 6 }}>
            <div className="text-center studentmessage-modal-button">
              <Button className="button button_settings-cancel"onClick={() => setIsOpen(false)}>Закрыть</Button>
            </div>
          </GridCol>
        </GridRow>
      </Dialog>
    </>
  );
};

export default SelectDateRange;
