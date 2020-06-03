import React, { useState, useRef, useEffect } from 'react';
import Popup from 'arui-feather/popup';
import './styles.scss';

// const operations = [
//   { type: 'all', name: 'Все операции'},
//   { type: 'lessons', name: 'Занятия'},
//   { type: 'applications', name: 'Заявки'},
//   { type: 'passes', name: 'Пропуски'},
//   { type: 'reviews', name: 'Отзывы'},
//   { type: 'conflicts', name: 'Конфликты'},
// ];

const SelectPopup = ({ onChange, value, options }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  let refPopup = useRef(null);
  const refTarget = useRef(null);

  useEffect(() => {
    refPopup.setTarget(refTarget.current);
  }, []);

  const handleChange = (value) => {
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  const selected = options.find(item => item.type === value);

  return (
    <span className="select-popup">
      <span
        ref={refTarget}
        className="select-popup-title"
        onClick={() => setIsOpen(true)}
      >
        {selected.name}
      </span>
      <Popup
        ref={(popup) => { refPopup = popup; }}
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        mainOffset={10}
      >
        <div className="teacher-online-list">
          <ul>
            {options.map(item => (
              <li key={item.type} className={item.type === value ? 'active' : ''} onClick={() => handleChange(item.type)}>{item.name}</li>
            ))}
          </ul>
        </div>
      </Popup>
    </span>
  );
};

export default SelectPopup;
