import React, {useEffect} from 'react'
//pake useSelector agar bisa akses state yg di selector
import {useSelector, useDispatch} from 'react-redux'
import {getProducts, productSelectors, DELETEProducts} from '../features/ProductSlice'
import {Link} from 'react-router-dom'

const ShowProduct = () => {
    // const {title, price} = useSelector(state => state.product)
    // use selector akses state yg bernaama product (nama sesuai di slice.jsx), ambil title sm price

    const dispatch = useDispatch()
    //get data
    const products = useSelector(productSelectors.selectAll)
    //ambil data pake useEffect karena dari API
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div className='box mt-5'>
            <Link to='add' className='button is-warning'>
                Add New Data
            </Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx) => (
                        <tr key={product.id}>
                            <td>{idx + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link
                                    to={`edit/${product.id}`}
                                    className='button is-info is-smaill mr-2'>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => dispatch(DELETEProducts(product.id))}
                                    className='button is-danger is-smaill'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProduct
