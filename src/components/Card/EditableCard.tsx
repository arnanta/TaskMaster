import React, { useState } from 'react';
import style from './EditableCard.module.css';
import { CardType } from './types/CardTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store';
import { editCard } from '@/Store/Card/CardSlice';

type CardProps = {
  card: CardType;
};

const EditableCard: React.FC<CardProps> = ({ card }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(card.name);
  const [content, setContent] = useState(card.content);
  const [comments, setComments] = useState(card.comments);
  const handleSubmit = (event: React.MouseEvent) => {
    //! event won't be needed here most probably
    //! Will dispatch the editAction here
    //!Need to prepare the payload first for the edit action
    const newCardData = {
      id: card.id,
      name: name,
      content: content,
      comments: comments,
      taskType: 'Personal',
    };

    dispatch(editCard(newCardData));
  };
  return (
    <div className={style.container}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea
        id="content"
        name="content"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input value={comments} onChange={(e) => setComments(e.target.value)} />
      <div className={style.button}>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Save Changes
        </button>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditableCard;
