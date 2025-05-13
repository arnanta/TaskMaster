import { CardType } from './types/CardTypes';
import style from './Card.module.css';
import { EditIcon, DeleteIcon } from '@/assets/icons';
import { useState } from 'react';
import EditableCard from './EditableCard';
type CardProps = {
  card: CardType;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  if (!card) return null;
  const { id, name, content, dueDate, comments, taskType } = card;
  const handleEditAction = () => {
    setShowEdit(true);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          {name}
          <span onClick={() => handleEditAction()}>
            <EditIcon />
          </span>
          <span>
            <DeleteIcon />
          </span>
        </div>
        <div className={style.body}>
          <p>{content}</p>
        </div>
        <span>{comments}</span>
      </div>
      {showEdit && <EditableCard card={{ id, name, content, comments, taskType }} />}
    </>
  );
};

export default Card;
