import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@/components/Card/Card';
import style from './TasksView.module.css';
import { useLocation } from 'react-router-dom';
import { RootState } from '@/Store';
import ExtendedCard from '@/components/Card/ExtendedCard/ExtendedCard';

const TasksPage: React.FC = () => {
  const location = useLocation();
  const cards = useSelector((state: RootState) => state.card);

  const getFilteredCards = () => {
    if (location.pathname.includes('active')) {
      return cards.filter((card) => card.status === 'Active');
    } else if (location.pathname.includes('completed')) {
      return cards.filter((card) => card.status === 'Completed');
    }
    return cards;
  };

  const getTitle = () => {
    if (location.pathname.includes('active')) return 'Active Tasks';
    if (location.pathname.includes('completed')) return 'Completed Tasks';
    return 'All Tasks';
  };

  return (
    <>
      <div className={style.tasksPage}>
        <h1>{getTitle()}</h1>
        {cards ? (
          <div className={style.cardList}>
            {getFilteredCards().map((card) => (
              <ExtendedCard key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className={style.noCards}>Sorry! No cards yet</div>
        )}
      </div>
    </>
  );
};

export default TasksPage;
