import { combineSlices } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import baseSlice from './baseSlice'


const rootReducer = combineSlices({
    userReducer: userSlice,
    baseReducer: baseSlice,
  });
  
  export default rootReducer;
  