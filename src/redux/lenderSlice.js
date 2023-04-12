import { createSlice } from '@reduxjs/toolkit';
export const lenderSlice = createSlice({
  name: 'lender',
  initialState: {
    id: 1,
    name: 'manjunath',
  },
  reducers: {
    add: (state) => {
      state.value -= 1;
    },
    delete: (state) => {
      state.value -= 1;
    },
    updateRecords: (state, action) => {
      state.value += action.payload
    }
  }
});

export const { add, delete, updateRecords } = lenderSlice.actions;

export default lenderSlice.reducer;
