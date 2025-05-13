import { useSelector } from 'react-redux';
import { RootState } from '@/Store';
import Card from '../Card/Card';
import style from './PersonalTask.module.css';

const PersonalTasks = () => {
  const cardData = useSelector((state: RootState) => state.card);
  const personalCards = cardData.filter((card) => card.taskType === 'Personal');

  return (
    <div className={style.container}>
      <div className={style.cardList}>
        {personalCards.map((card) => (
          <Card key={crypto.randomUUID()} card={card} />
        ))}
      </div>
    </div>
  );
};

export default PersonalTasks;
