export type CardType = {
  id?: string;
  name: string;
  content: string;
  dueDate?: any;
  comments?: string;
  taskType: 'Work' | 'Personal';
} | null;
