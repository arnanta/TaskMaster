import React from 'react';
import style from './Card.module.css';
import { CardType } from './types/CardTypes';

const Card: React.FC<CardType> = ({ name, content, dueDate, comments }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>{name}</div>
      <div className={style.body}>
        <p>{content}</p>
      </div>
      <span>{comments}</span>
    </div>
  );
};

export default Card;
