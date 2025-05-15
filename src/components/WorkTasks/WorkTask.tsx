import { useSelector } from 'react-redux';
import { RootState } from '@/Store';
import Card from '../Card/Card';

const WorkTasks = () => {
  const cardData = useSelector((state: RootState) => state.card);
  const workCards = cardData.filter((card) => card.taskType === 'Work');

  return (
    <div>
      <h2>Work Tasks</h2>
      {workCards.map((card) => (
        <Card key={crypto.randomUUID()} card={card} />
      ))}
    </div>
  );
};

export default WorkTasks;
