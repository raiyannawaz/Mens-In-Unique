import { Favorite, FavoriteBorder, StarBorder } from "@mui/icons-material"
import { useContext } from "react";
import { Link } from "react-router-dom"
import Context from "../ContextAPI/Context";

const WishlistItem = ({wishlistItem}) => {

    let {handleWishlist, handleCart} = useContext(Context);
    
    let { title, image: img, price, actualPrice, listed, id, rating } = wishlistItem;

    let {wishListed} = listed;

    return (
        <div className="item border">
            <Link to={`/product/${id}`} target='_blank'>
                <img src={img} className='img-fluid p-2' alt="" />
                <div className="d-flex justify-content-between px-2 item-div-1">
                    <p className='mb-1 text-muted'>Reviews {rating} <StarBorder fontSize='small' /></p>
                    <p className='mb-1 text-decoration-line-through text-muted'>₹{actualPrice}</p>
                </div>
                <div className="d-flex justify-content-between px-2 item-div-2">
                    <h5 className='mb-2'>{title}</h5>
                    <h5 className='mb-2'>₹{price}</h5>
                </div>
            </Link>
            <div className="d-flex align-items-center item-div-3">
                <button className="wishlist">
                    {wishListed ? <Favorite fontSize="large" onClick={() => { handleWishlist(wishListed, id) }} /> :
                        <FavoriteBorder fontSize="large" onClick={() => { handleWishlist(wishListed, id) }} />}
                </button>
                <button className="cart" onClick={()=>{handleCart(false, id)}}>Add To Cart</button>
            </div>
        </div>
    )
}

export default WishlistItem;