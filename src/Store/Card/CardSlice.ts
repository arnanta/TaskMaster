import { CardType } from '@/components/Card/types/CardTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CardType[] = [];

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
      state.push(action.payload);
    },
    editCard: (state, action: PayloadAction<CardType>) => {
      const index = state.findIndex((card) => card.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      return state.filter((card) => card.id !== action.payload);
    },
  },
});

export default cardSlice.reducer;
export const { addCard, editCard, deleteCard } = cardSlice.actions;
