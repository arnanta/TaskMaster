import { CardType } from './types/CardTypes';
import style from './Card.module.css';
import { EditIcon, DeleteIcon } from '@/assets/icons';
import { useState } from 'react';
import EditableCard from './EditableCard';
import { deleteCard } from '@/Store/Card/CardSlice';
import { useDispatch } from 'react-redux';

type CardProps = {
  card: CardType;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  if (!card) return null;
  const { id, name, content } = card;

  const handleEditAction = () => {
    setShowEdit(true);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <span>{name}</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span onClick={handleEditAction} title="Edit">
              <EditIcon />
            </span>
            <span onClick={() => dispatch(deleteCard(id as string))} title="Delete">
              <DeleteIcon />
            </span>
          </div>
        </div>
        <div className={style.body}>
          <p>{content}</p>
        </div>
      </div>
      {showEdit && (
        <EditableCard card={{ id, name, content }} showEdit={showEdit} setShowEdit={setShowEdit} />
      )}
    </>
  );
};

export default Card;
