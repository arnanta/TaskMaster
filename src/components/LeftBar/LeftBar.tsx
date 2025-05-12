import React, { RefObject, useState } from 'react';
import style from './Leftbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store';
import { addCard } from '@/Store/Card/CardSlice';
import Card from '../Card/Card';
import Form from '../Form/Form';
import { AvatarIcon } from '@/assets/icons';

type LeftBarProps = {
  menuRef: RefObject<HTMLDivElement | null>;
};

const LeftBar: React.FC<LeftBarProps> = ({ menuRef }) => {
  const [showCards, setShowCards] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const cardData = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();

  const handleCards = () => {
    setShowCards(true);
  };

  const openTaskAddForm = () => {
    setShowForm(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newCardData = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      content: formData.get('content') as string,
      comments: formData.get('comments') as string,
      taskType: formData.get('taskType') as 'Work' | 'Personal',
    };
    dispatch(addCard(newCardData));
    setShowForm(false);
    setShowCards(true);
  };

  return (
    <>
      <div ref={menuRef} className={style.menu}>
        <ul>
          <li onClick={handleCards}>My Tasks</li>
          <li>Due Assignments</li>
          <li onClick={openTaskAddForm}>Add a task</li>
        </ul>
        <div className={style.avatar}>
          <AvatarIcon />
        </div>
      </div>

      <div>
        {showCards &&
          cardData?.length > 0 &&
          cardData.map((card) => <Card key={card.id} card={card} />)}
      </div>
      {showForm && (
        <div className="formContainer">
          <Form onSubmit={(event) => handleSubmit(event)} />
        </div>
      )}
    </>
  );
};

export default LeftBar;
