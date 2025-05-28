import React from 'react';
import { useForm } from '../contexts/FormContext/FormContext';
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/Card/CardSlice';
import Form from '../components/Form/Form';
import style from './FormAction.module.css';
const FormActionWrapper: React.FC = () => {
  const { showForm, closeForm } = useForm();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newCardData = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      content: formData.get('content') as string,
      status: formData.get('status') as string,
      priority: formData.get('priority') as string,
      dueDate: formData.get('dueDate'),
    };
    dispatch(addCard(newCardData));
    window.alert('Yayy! New Task added');
    closeForm();
  };

  if (!showForm) return null;

  return (
    <div className={style.overlay} onClick={closeForm}>
      <div className={style.formWrapper} onClick={(e) => e.stopPropagation()}>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FormActionWrapper;
