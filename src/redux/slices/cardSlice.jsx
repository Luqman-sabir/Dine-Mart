import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
  name: 'reduxData',
  initialState:{
    data:[],
  },
  reducers:{
    addToCart:( state , action)=>{
     state.data.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToCart} = Slice.actions

export default Slice.reducer