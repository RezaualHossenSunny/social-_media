import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userLogininfo') ? JSON.parse(localStorage.getItem('userLogininfo')): null,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogininfo: (state,action) => {
      // console.log(action.payload);
      state.userInfo = action.payload
     
    },
   
  },
})


export const { userLogininfo } = counterSlice.actions

export default counterSlice.reducer