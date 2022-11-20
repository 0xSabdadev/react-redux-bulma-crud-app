import React, {useState, useEffect} from 'react'
//menggunakan dispatch pake useDispacth
import {useDispatch, useSelector} from 'react-redux'
//panggil func reducer yg mau di despatch
// import {update} from '../features/ProductSlice'
import {getProducts, productSelectors, PUTProducts} from '../features/ProductSlice'
import {useParams, useNavigate} from 'react-router-dom'

const EditProduct = () => {
    //buat state untuk nnt dikirim ke store
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    //buat dispact
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //dapat id dari url
    const {id} = useParams()
    //function mengUpdate data
    // const updateProduct = e => {
    //agar tidak reload
    //     e.preventDefault()
    //     dispatch(update({title, price}))
    // }

    //panggil data
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    //dari semua data yg dipanggil, get yg seesuai id
    const product = useSelector(state => productSelectors.selectById(state, id))

    //data yg diambil di set ke usestate agar mengisi value form
    useEffect(() => {
        if (product) {
            setTitle(product.title)
            setPrice(product.price)
        }
    }, [product])

    const check = e => {
        e.preventDefault()
        console.log({title, price})
    }

    const handleUpdate = async e => {
        e.preventDefault()
        await dispatch(PUTProducts({id, title, price}))
        navigate('/')
    }

    return (
        <>
            <form onSubmit={handleUpdate} className='box mt-5'>
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
                    <button className='button is-success'>Update</button>
                </div>
            </form>
        </>
    )
}

export default EditProduct
