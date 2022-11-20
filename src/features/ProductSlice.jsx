import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    //ambil data API
    const response = await axios.get('http://localhost:5000/products')
    return response.data
})

export const POSTProducts = createAsyncThunk('products/saveProducts', async ({title, price}) => {
    //kirim data API
    const response = await axios.post('http://localhost:5000/products', {
        title,
        price,
    })
    return response.data
})

export const DELETEProducts = createAsyncThunk('products/deleteProducts', async id => {
    //delete data API
    await axios.delete(`http://localhost:5000/products/${id}`)
    return id
})

export const PUTProducts = createAsyncThunk(
    'products/updateProducts',
    async ({id, title, price}) => {
        //UPDATE data API
        const response = await axios.patch(`http://localhost:5000/products/${id}`, {
            title,
            price,
        })
        return response.data
    },
)

const productEntitiy = createEntityAdapter({
    selectId: product => product.id,
})

const ProductSlice = createSlice({
    name: 'product',
    initialState: productEntitiy.getInitialState(),
    extraReducers: {
        //mengisi data ke state
        [getProducts.fulfilled]: (state, action) => {
            productEntitiy.setAll(state, action.payload)
        },
        [POSTProducts.fulfilled]: (state, action) => {
            productEntitiy.addOne(state, action.payload)
        },
        [DELETEProducts.fulfilled]: (state, action) => {
            productEntitiy.removeOne(state, action.payload)
        },
        [PUTProducts.fulfilled]: (state, action) => {
            productEntitiy.updateOne(state, {id: action.payload.id, updates: action.payload})
        },
    },
})

// export state buat comp yg membutuhkan
export const productSelectors = productEntitiy.getSelectors(state => state.product)

//export action pada reducer
// export const {update} = ProductSlice.actions
//export reducer agar bisa digunakan di store
export default ProductSlice.reducer
