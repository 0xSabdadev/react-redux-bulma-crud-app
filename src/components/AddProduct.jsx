import React, {useState} from 'react'
//menggunakan dispatch pake useDispacth
import {useDispatch} from 'react-redux'
//panggil func reducer yg mau di despatch
// import {update} from '../features/ProductSlice'
import {POSTProducts} from '../features/ProductSlice'
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {
    //buat state untuk nnt dikirim ke store
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    //buat dispact
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //function mengUpdate data
    // const updateProduct = e => {
    //agar tidak reload
    //     e.preventDefault()
    //     dispatch(update({title, price}))
    // }

    const check = e => {
        e.preventDefault()
        console.log({title, price})
    }

    //kirim handle
    const addProduct = async e => {
        e.preventDefault()
        await dispatch(POSTProducts({title, price}))
        //balik ke home
        navigate('/')
    }
    return (
        <>
            <form onSubmit={addProduct} className='box mt-5'>
                <div className='field'>
                    <label className='label'>Title</label>
                    <div className='control'>
                        <input
                            type='text'
                            className='input'
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Price</label>
                    <div className='control'>
                        <input
                            type='text'
                            className='input'
                            placeholder='Price'
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className='field'>
                    <button className='button is-success'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddProduct
