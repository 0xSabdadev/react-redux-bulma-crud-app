import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        title: 'Helww',
        price: '1233',
    },
    reducers: {
        update: (state, action) => {
            state.title = action.payload.title
            state.price = action.payload.price
        },
    },
})

//export action pada reducer
export const update = ProductSlice.actions
//export reducer agar bisa digunakan di store
export default ProductSlice.reducer
