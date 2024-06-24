import { useContext } from "react"
import Context from "../ContextAPI/Context"
import { Link } from "react-router-dom";
import WishlistItem from '../Components/WishlistItem'

const Wishlists = () =>{
    
    let {localItems} = useContext(Context);

    let wishlistItems = localItems.filter((item) => {
        return item.listed.wishListed
    })

    return( wishlistItems.length === 0 ?
    <div className="wishlist-container">
        <h2>No Items</h2>
        <Link to="/collections/all" className='btn-redirect'>Shop Now</Link>
    </div>
    :
    <div className="container py-lg-4 py-3 collections">
        <div className="row g-lg-4 g-2">
            {wishlistItems.map((wishlistItem) => {
                return <div className="col-lg-3 col-md-4 col-6" key={wishlistItem.id}>
                    <WishlistItem wishlistItem={wishlistItem}/>
                </div>
            })}
        </div>
    </div>
    )
}

export default Wishlists;