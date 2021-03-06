import React, { useState, useRef, useEffect } from 'react';
import Popup from 'arui-feather/popup';
import './styles.scss';

const operations = [
  { type: 'all', name: 'Все операции'},
  { type: 'lessons', name: 'Занятия'},
  { type: 'applications', name: 'Заявки'},
  { type: 'passes', name: 'Пропуски'},
  { type: 'reviews', name: 'Отзывы'},
  { type: 'conflicts', name: 'Конфликты'},
];

const SelectOperation = ({ onChange }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ value, setValue ] = useState('all');
  let refPopup = useRef(null);
  let refTarget = useRef(null);

  useEffect(() => {
    refPopup.setTarget(refTarget.current);
  }, []);

  const handleChange = (value) => {
    setValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const selectedOperation = operations.find(item => item.type === value);

  return (
    <span className="select-operation">
      <span
        ref={refTarget}
        className="select-operation-title"
        onClick={() => setIsOpen(true)}
      >
        {selectedOperation.name}
      </span>
      <Popup
        ref={(popup) => { refPopup = popup; }}
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        mainOffset={10}
      >
        <div className="teacher-online-list">
          <ul>
            {operations.map(item => (
              <li key={item.type} className={item.type === value ? 'active' : ''} onClick={() => handleChange(item.type)}>{item.name}</li>
            ))}
          </ul>
        </div>
      </Popup>
    </span>
  );
};

export default SelectOperation;
