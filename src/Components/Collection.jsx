import { Link } from "react-router-dom";
import { Favorite, FavoriteBorder, ShoppingBag, StarBorder } from "@mui/icons-material";
import { useContext } from "react";
import Context from "../ContextAPI/Context";

const Collection = ({ product }) => {

    let {handleWishlist, handleCart} = useContext(Context)

    let { title, image: img, price, actualPrice, rating, id } = product;

    let { wishListed } = product.listed;

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
                <button className="wishlist" onClick={()=>{handleWishlist(wishListed, id)}}>
                    {wishListed ? <Favorite fontSize="large"/> :
                     <FavoriteBorder fontSize="large"/>}
                </button>
                <button className="cart" onClick={()=>{handleCart(true, id)}}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Collection