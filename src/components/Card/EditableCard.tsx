import React, { useState } from 'react';
import style from './EditableCard.module.css';
import { CardType } from './types/CardTypes';
import { useDispatch } from 'react-redux';
import { editCard } from '@/Store/Card/CardSlice';

type editableCardProps = {
  card: CardType;
  showEdit: boolean;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditableCard: React.FC<editableCardProps> = ({ card, showEdit, setShowEdit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(card.name);
  const [content, setContent] = useState(card.content);
  const [status, setStatus] = useState(card.status);
  const [priority, setPriority] = useState(card.priority);
  const [dueDate, setDueDate] = useState(card?.dueDate);
  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(
      editCard({
        id: card.id,
        name,
        content,
        status,
        priority,
        dueDate,
      }),
    );
    setShowEdit(false);
  };

  const onCancel = () => {
    setShowEdit(false);
  };

  return (
    <div className={style.container}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Card title" />
      <input
        id="dueDate"
        type="date"
        name="dueDate"
        className={style.dateInput}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter card content..."
      />

      <div className={style.selectGroup}>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={style.select}
          >
            <option value="New">New</option>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={style.select}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
      </div>

      <div className={style.button}>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
    </div>
  );
};

export default EditableCard;
