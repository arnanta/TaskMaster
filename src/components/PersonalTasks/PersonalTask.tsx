import { useSelector } from 'react-redux';
import { RootState } from '@/Store';
import Card from '../Card/Card';

const PersonalTasks = () => {
  const cardData = useSelector((state: RootState) => state.card);
  const personalCards = cardData.filter((card) => card.taskType === 'Personal');

  return (
    <div>
      <h2>Personal Tasks</h2>
      {personalCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default PersonalTasks;
