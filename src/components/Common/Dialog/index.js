import React from 'react';
import Type from 'prop-types';
import Modal from '../Modal';

function Dialog({ isOpen = false, onClose, children, title = '' }) {
  return(
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      focusTrapped
      classNames={{overlay: 'dialog-overlay', modal: 'dialog-modal', closeButton: 'dialog-close-button'}}
    >
      <div>
        <div className="dialog-header">
          <h3>{title}</h3>
        </div>
        <div className="dialog-body">
          {children}
        </div>
      </div>
    </Modal>
  );
}

Dialog.propTypes={
  isOpen: Type.bool.isRequired,
  onClose: Type.func.isRequired,
  title: Type.string
};

export default Dialog

