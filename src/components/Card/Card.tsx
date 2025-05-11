import { CardType } from './types/CardTypes';
import style from './Card.module.css';
type CardProps = {
  card: CardType;
};

const Card: React.FC<CardProps> = ({ card }) => {
  if (!card) return null;

  const { name, content, dueDate, comments } = card;

  return (
    <div className={style.container}>
      <div className={style.header}>{name}</div>
      <div className={style.body}>
        <p>{content}</p>
      </div>
      <span>{comments}</span>
    </div>
  );
};

export default Card;
