export type CardType = {
  id?: string;
  name: string;
  content: string;
  dueDate?: Date;
  priority?: string;
  status: string;
} | null;
