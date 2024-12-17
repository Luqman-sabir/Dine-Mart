import { configureStore } from '@reduxjs/toolkit'
import  Slice  from './slices/cardSlice';
const store = configureStore({
    reducer:{
       sliceData : Slice,
    }
});
export default store;

