import React, { useState } from 'react';
import styles from './ExtendedCard.module.css';
import { EditIcon, DeleteIcon } from '@/assets/icons';
import EditableCard from '../EditableCard';
import { useDispatch } from 'react-redux';
import { deleteCard } from '@/Store/Card/CardSlice';

type CardProps = {
  id: string;
  name: string;
  content: string;
  dueDate: string;
  priority: string;
  status: string;
};

type ExtendedCardProps = {
  card: CardProps;
};

const ExtendedCard: React.FC<ExtendedCardProps> = ({ card }) => {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => setShowEdit(true);
  const handleDelete = () => dispatch(deleteCard(card.id));

  return (
    <>
      <div className={styles.extendedCard}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h2>{card.name}</h2>
          </div>
          <div className={styles.actions}>
            <span title="Edit" onClick={handleEdit}>
              <EditIcon />
            </span>
            <span title="Delete" onClick={handleDelete}>
              <DeleteIcon />
            </span>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <strong>Description:</strong>
            <p>{card.content}</p>
          </div>
          <div className={styles.detailItem}>
            <strong>Due Date:</strong>
            <p>{card.dueDate}</p>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.badge}>
            <strong>Status:</strong> <span>{card.status}</span>
          </div>
          <div className={`${styles.priority} ${styles[`${card.priority}`]}`}>
            <strong>Priority:</strong> <span>{card.priority}</span>
          </div>
        </div>
      </div>

      {showEdit && (
        <EditableCard
          card={{
            id: card.id,
            name: card.name,
            content: card.content,
            status: card.status,
            priority: card.priority,
            dueDate: card.dueDate,
          }}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
    </>
  );
};

export default ExtendedCard;
