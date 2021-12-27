import { configureStore } from '@reduxjs/toolkit'
import breakTheHeckOutSlice from "./breakTheHeckOutSlice"

export const store = configureStore({
  reducer: {
    breakTheHeckOut: breakTheHeckOutSlice
  },
})
