import React from 'react';
import style from './Modal.module.css';

type Modalprops = {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
};
const Modal: React.FC<Modalprops> = ({ isOpen, onClose, header, body, footer }) => {
  if (!isOpen) return null;
  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(event) => event.stopPropagation()}>
        {header && <div className={style.header}>{header}</div>}
        <div className={style.body}>{body}</div>
        {footer && <div className={style.footer}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
