// Tasks.tsx
import React, { useState } from 'react';
import style from './Tasks.module.css';
import ExtendedCard from '@/components/Card/ExtendedCard/ExtendedCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store';
import { FiInbox } from 'react-icons/fi';

const Tasks = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const cardData = useSelector((state: RootState) => state.card);

  const handleShowExtendedCard = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  const getPriorityClass = (priority: string) => {
    if (priority) {
      switch (priority.toLowerCase()) {
        case 'high':
          return style['priority-high'];
        case 'medium':
          return style['priority-medium'];
        default:
          return style['priority-low'];
      }
    }
  };

  const getStatusClass = (status: string) => {
    if (status) {
      switch (status.toLowerCase()) {
        case 'new':
          return style['status-new'];
        case 'active':
          return style['status-active'];
        case 'completed':
          return style['status-completed'];
        default:
          return '';
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>Tasks</div>
      <div className={style.cardContainer}>
        <div className={style.cardNameSection}>
          <h2>My Tasks</h2>
          {cardData.length > 0 ? (
            cardData.map((card) => (
              <div
                key={card.id}
                className={`${style.cardStack} ${selectedCardId === card.id ? style.active : ''}`}
                onClick={() => handleShowExtendedCard(card.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className={`${style.statusIndicator} ${getStatusClass(card.status)}`} />
                  {card.name}
                </div>
                <span className={`${style.priorityTag} ${getPriorityClass(card.priority)}`}>
                  {card.priority}
                </span>
              </div>
            ))
          ) : (
            <div className={style.emptyState}>
              <FiInbox className={style.emptyStateIcon} />
              <p>No tasks found</p>
              <p>Create a new task to get started</p>
            </div>
          )}
        </div>

        <div className={style.cardDetailsSection}>
          <h2>Details Section</h2>
          {selectedCard ? (
            <ExtendedCard card={selectedCard} />
          ) : (
            <div className={style.emptyState}>
              <FiInbox className={style.emptyStateIcon} />
              <p>Select a task to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
