import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../features/cardSlice'


export const store = configureStore({
     reducer: {
          allCarts : cardReducer
     },
})
