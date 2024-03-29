import React from 'react'
import { Link } from 'react-router-dom';

export default function Collection({ product, handleWishlist, handleCart }) {

    let { title, image: img, price, actualPrice, rating } = product;

    return (
        <div className="item border">
            <Link to={'/product/' + product.id} target='_blank'>
            <img src={img} className='img-fluid p-2' alt="" />
                <div className="d-flex justify-content-between px-2 item-div-1">
                    <p className='mb-1 text-muted'>Reviews {rating} <i className='fa-regular fa-star'></i></p>
                    <p className='mb-1 text-decoration-line-through text-muted'>₹{actualPrice}</p>
                </div>
                <div className="d-flex justify-content-between px-2 item-div-2">
                    <h5 className='mb-2'>{title}</h5>
                    <h5 className='mb-2'>₹{price}</h5>
                </div>
            </Link>
            <div className="d-flex justify-content-between align-items-center item-div-3">
                <div className="btn-heart">
                    <i className={`fa${!product.listed.wishlisted ? '-regular' : ''} fa-heart fa-2x text-primary`} onClick={((e) => { handleWishlist(e, product) })}></i>
                </div>
                <button onClick={(e)=>{handleCart(e, product)}} data-id='add'>Add To Cart</button>
            </div>
        </div>
    )
}
