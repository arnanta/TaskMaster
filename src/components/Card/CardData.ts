import { CardType } from './types/CardTypes';

export const cardData: CardType[] = [
  {
    id: '1',
    name: 'Project Kickoff',
    content: 'Initial meeting with the team and stakeholders.',
    dueDate: new Date('2025-05-10'),
  },
  {
    id: '2',
    name: 'Design Review',
    content: 'Review the initial UI/UX designs.',
    dueDate: new Date('2025-05-12'),
  },
  {
    id: '3',
    name: 'API Integration',
    content: 'Connect the frontend to backend services.',
    dueDate: new Date('2025-05-15'),
  },
  {
    id: '4',
    name: 'Testing Phase',
    content: 'Run unit and integration tests.',
    dueDate: new Date('2025-05-18'),
  },
  {
    id: '5',
    name: 'Release Prep',
    content: 'Finalize documentation and deployment steps.',
    dueDate: new Date('2025-05-20'),
  },
];
