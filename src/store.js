import { configureStore } from '@reduxjs/toolkit';
import { lenderReducer } from './redux/lenderSlice';
export default configureStore({
  reducer: {
    lender: lenderReducer,
  },
});
