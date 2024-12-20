import { configureStore } from '@reduxjs/toolkit'
import  Slice  from './slices/cardSlice';
import CategorySlice from "./slices/CategorySlice"
import SearchSlice from './slices/SearchSlice'
const store = configureStore({
    reducer:{
       sliceData : Slice,
       category:CategorySlice,
       search :SearchSlice,
    }
});
export default store;

