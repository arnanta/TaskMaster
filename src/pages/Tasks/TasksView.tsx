import React from 'react';
import { useSelector } from 'react-redux';
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
  const filteredCards = React.useMemo(() => getFilteredCards(), [cards, location.pathname]);
  const getTitle = () => {
    if (location.pathname.includes('active')) return 'Active Tasks';
    if (location.pathname.includes('completed')) return 'Completed Tasks';
    return 'All Tasks';
  };

  return (
    <>
      <div className={style.tasksPage}>
        <h1>{getTitle()}</h1>
        {filteredCards.length > 0 ? ( // Changed this condition
          <div className={style.cardList}>
            {filteredCards.map((card) => (
              <ExtendedCard key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className={style.noCards}>
            {' '}
            <img src="./../../public/assets/articles_blank_main.jpg" alt="No tasks" />
            <h3>Oops! No {getTitle().toLowerCase()} found</h3>
            <p>Create a new task to get started</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TasksPage;
