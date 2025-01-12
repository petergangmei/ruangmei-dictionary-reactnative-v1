import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setUser(state, action){
      state.user = action.payload;
    }
  },
});

export const { 
    setUser
} = userSlice.actions;

export default userSlice.reducer;
