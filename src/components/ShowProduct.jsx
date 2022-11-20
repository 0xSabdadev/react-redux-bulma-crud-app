import React from 'react'
//pake useSelector agar bisa akses state yg di selector
import {useSelector} from 'react-redux'

const ShowProduct = () => {
    const {title, price} = useSelector(state => state.product)
    // use selector akses state yg bernaama product (nama sesuai di slice.jsx), ambil title sm price
    return (
        <div className='box mt-5'>
            <h4 className='title is-4'>{title}</h4>
            <h4 className='title is-4'>{price}</h4>
        </div>
    )
}

export default ShowProduct
