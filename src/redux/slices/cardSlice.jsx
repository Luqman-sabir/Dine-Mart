import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
  name: 'reduxData',
  initialState:{
    data:[],
  },
  reducers:{
    addToCart:( state , action)=>{
      const existingItems = state.data.find((item)=>
        item.id === action.payload.id
      );
      if (existingItems){
         state.data = state.data.map((item)=>item.id===action.payload.id
        ?{...item,qty:item.qty+1}
        :item
        )
      }
      else{
        state.data.push(action.payload)
      }
    },
    removeCart : (state , action)=>{
      state.data = state.data.filter((item)=>item.id !== action.payload.id)
    },
    incrementQty : (state , action)=>{
      state.data = state.data.map((item)=>(
        item.id === action.payload.id ?{
          ...item , qty : item.qty + 1
        }:item
      ))
    },
    decrementQty : (state , action)=>{
      state.data = state.data.map((item)=>(
        item.id === action.payload.id ?{
          ...item , qty : item.qty - 1
        }:item
      ))
    },
  },
})

// Action creators are generated for each case reducer function
export const {addToCart,removeCart,incrementQty,decrementQty} = Slice.actions

export default Slice.reducer