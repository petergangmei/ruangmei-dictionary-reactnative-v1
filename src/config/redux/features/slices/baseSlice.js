import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  passcode: '12345',
};

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setPasscode(state, action){
      state.passcode = action.payload;
    }
    
  },
});

export const { 
  setPasscode
} = baseSlice.actions;

export default baseSlice.reducer;
