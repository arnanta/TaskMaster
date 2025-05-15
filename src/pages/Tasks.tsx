import React, { useState } from 'react';
import style from './Tasks.module.css';
import ExtendedCard from '@/components/Card/ExtendedCard/ExtendedCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store';

const Tasks = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const cardData = useSelector((state: RootState) => state.card);

  const handleShowExtendedCard = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  return (
    <div className={style.container}>
      <div className={style.header}>Tasks</div>
      <div className={style.cardContainer}>
        <div className={style.cardNameSection}>
          <h2>My Tasks</h2>
          {cardData.map((card) => (
            <div
              key={card.id}
              className={style.cardStack}
              onClick={() => handleShowExtendedCard(card.id)}
              style={{ cursor: 'pointer' }}
            >
              {card.name}
            </div>
          ))}
        </div>

        <div className={style.cardDetailsSection}>
          <h2>Details Section</h2>
          {selectedCard && <ExtendedCard card={selectedCard} />}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
