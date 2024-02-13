import { configureStore } from '@reduxjs/toolkit'
import Userslice from './Slices/Userslice'

export const store = configureStore({
  reducer: {
    userLogininfo: Userslice
  },
})