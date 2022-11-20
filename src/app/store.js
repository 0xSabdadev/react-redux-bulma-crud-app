import {configureStore} from '@reduxjs/toolkit'
//import reduxer dr productslice (nama bebas)
import ProductReducer from '../features/ProductSlice'

export const store = configureStore({
    reducer: {
        product: ProductReducer,
    },
})
