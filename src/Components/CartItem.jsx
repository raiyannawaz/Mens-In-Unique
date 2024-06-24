import { Delete, Favorite } from "@mui/icons-material";

const CartItem = ({ cartItem, handleRemoveToWishlist, handleRemoveFromCart, handleChangeQuantity, handleChangeSize }) => {

    let { id, title, desc, image, price, listed } = cartItem;

    let quantities = [1, 2, 3, 4, 5, listed.cart.quantity > 5 ? listed.cart.quantity : '+5']

    return (
        <div className="cart-item mt-3 bg-white shadow h-100 py-lg-0 py-2" key={id}>
            <div className="row gx-lg-auto gx-0">
                <div className="col-lg-3 col-4">
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-9 col-8">
                    <div className="d-flex flex-column justify-content-center h-100 cart-item-info py-lg-0">
                        <h4 className='m-0 pb-lg-2 pb-1 title'>{title}</h4>
                        <p className='m-0 text-muted pb-lg-2 pb-1 desc'>{desc}</p>
                        <div className="d-flex pb-lg-2 pb-1 event">
                            <p className='m-0 text-primary' onClick={() => { handleRemoveToWishlist(id) }}>Move To Wishlist <Favorite /></p>
                            <p className='m-0 ms-lg-3 ms-2 text-danger' onClick={() => { handleRemoveFromCart(id) }}>Move To Trash <Delete /></p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="cart-select me-lg-5 me-2 py-lg-1 px-lg-2 quantities">
                                Qty:<select name="quantity" id="quantity" value={listed.cart.quantity} onChange={(event)=>{handleChangeQuantity(event, id)}}>
                                    {quantities.map(quantity => {
                                        return <option key={quantity} value={quantity}>{quantity}</option>
                                    })}
                                </select>
                            </div>
                            {cartItem.sizeAvailable ? <div className="cart-select py-lg-1 px-lg-2 sizes">
                                Size: <select name="sizes" id="size" value={listed.cart.selectedSize} onChange={(event)=>{handleChangeSize(event, id)}}>
                                    {cartItem.sizeAvailable.map((size) => {
                                        return <option key={size}>{size}</option>
                                    })}
                                </select> </div> : ''}
                            <h3 className='ms-auto mb-0 me-3'>₹<span className='price'>{price * listed.cart.quantity}</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;