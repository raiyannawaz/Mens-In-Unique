import img1 from '../Img/analogwatch.jpg'
import img2 from '../Img/smartwatch.webp'
import img3 from '../Img/boots.jpg'
import img4 from '../Img/shoes.jpg'
import img5 from '../Img/pant.jpg'
import img6 from '../Img/jeans.avif'
import img7 from '../Img/hoodie.webp'
import img8 from '../Img/leatherjacket.jpg'
import img9 from '../Img/pufferjacket.jpg'
import img10 from '../Img/casualjacket.webp'
import img11 from '../Img/shirt.jpg'
import img12 from '../Img/tshirt.jpg'

import Context from './Context'
import { useState } from 'react'
import { Favorite, FavoriteBorder, PriorityHigh, ShoppingBag, ThumbUp } from '@mui/icons-material'

const ContextState = (props) => {

    // Items 
    let items = [
        {
            id: 1,
            title: "Analog Watch",
            actualPrice: 3500,
            category: "accessories",
            color: "Brown",
            desc: "Brown/Black Analog Watch For Men With Leather Strap",
            image: img1,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            dialType: "Analog",
            strapType: "Leather",
            price: 2500,
            rating: 4,
            type: "Analog Watch"
        },
        {
            id: 2,
            title: "Smart Watch",
            actualPrice: 6500,
            category: "accessories",
            color: "Black",
            desc: "Smart Watch For Men With Multiple Facility",
            image: img2,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            dialType: "Smart",
            strapType: "Rubber",
            price: 4500,
            rating: 2.9,
            type: "Smart Watch"
        },
        {
            id: 3,
            title: "Leather Boots",
            actualPrice: 3500,
            category: "foot-wear",
            color: "Brown",
            desc: "Brown Leather Boots For Men",
            image: img3,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [6, 7, 8, 9],
            material: "Leather",
            occasion: "Formal/Casual",
            price: 2500,
            rating: 3.8,
            type: "Boots",
            fastening: 'Lace-up',
            ankleHeight: 'Mid-Top',
            soleMaterial: 'Leather'
        },
        {
            id: 4,
            title: "Oxford Shoes",
            actualPrice: 3000,
            category: "foot-wear",
            color: "Black",
            desc: "Black Leather Shoes For Men",
            image: img4,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [6, 7, 8, 9],
            material: "Leather",
            occasion: "Formal",
            price: 2000,
            rating: 3.2,
            type: "Formal Shoes",
            ankleHeight: 'Regular',
            fastening: 'Lace-up',
            soleMaterial: 'Leather'
        },
        {
            id: 5,
            title: "Formal Pant",
            actualPrice: 2800,
            category: "bottom-wear",
            color: "Biege",
            desc: "Black Cotton Pant For Men",
            image: img5,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [28, 30, 32, 34],
            material: "Cotton",
            occasion: "Formal",
            price: 1500,
            rating: 2.1,
            type: "Cotton Pant",
            length: 'Regular ',
            shade: 'Normal',
            waistRise: 'Mid-Rise'
        },
        {
            id: 6,
            title: "Jeans Pant",
            actualPrice: 3500,
            category: "bottom-wear",
            color: "Blue",
            desc: "Blue Jeans Pant For Men",
            image: img6,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [28, 30, 32, 34],
            material: "Denim",
            occasion: "Casual",
            price: 2500,
            rating: 3.1,
            type: "Denim Pant",
            length: 'Regular ',
            shade: 'Normal',
            waistRise: 'Mid-Rise'
        },
        {
            id: 7,
            title: "Men's Hoodie",
            actualPrice: 2800,
            category: "top-wear",
            color: "Black",
            desc: "Black Hoodie Sweatshirt For Men",
            image: img7,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [36, 38, 40, 42],
            material: "Cotton",
            occasion: "Winter/Casual",
            price: 1800,
            rating: 3.8,
            type: "Sweatshirt",
            sleeve: 'Full Sleeve',
            pattern: 'Plain',
            neck: 'Hood'
        },
        {
            id: 8,
            title: "Leather Jacket",
            actualPrice: 5000,
            category: "top-wear",
            color: "Black",
            desc: "Leather Black Biker Jacket For Men",
            image: img8,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [36, 38, 40, 42],
            material: "Leather",
            occasion: "Riding/Casual",
            price: 4000,
            rating: 4.8,
            type: "Jacket",
            sleeve: 'Full Sleeve',
            pattern: 'Solid',
            neck: 'Spread Collar'
        },
        {
            id: 9,
            title: "Puffer Jacket",
            actualPrice: 4500,
            category: "top-wear",
            color: "White",
            desc: "White Puffer Jacket For Men",
            image: img9,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [36, 38, 40, 42],
            material: "Cotton",
            occasion: "Winter/Casual",
            price: 3500,
            rating: 2.8,
            type: "Jacket",
            sleeve: 'Full Sleeve',
            pattern: 'Plain',
            neck: 'Hood'
        },
        {
            id: 10,
            title: "Casual Jacket",
            actualPrice: 4000,
            category: "top-wear",
            color: "Beige",
            desc: "Casual Beige Jacket For Men",
            image: img10,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [36, 38, 40, 42],
            material: "Fabric",
            occasion: "Casual",
            price: 3000,
            rating: 2.7,
            type: "Jacket",
            sleeve: 'Full Sleeve',
            pattern: 'Solid',
            neck: 'Mock Collar'
        },
        {
            id: 11,
            title: "Dark Shirt",
            actualPrice: 2000,
            category: "top-wear",
            color: "Dark Green",
            desc: "Dark Green Shirt With Checks For Men",
            image: img11,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [36, 38, 40, 42],
            material: "Cotton",
            occasion: "Formal/Casual",
            price: 1000,
            rating: 3.9,
            type: "Shirt",
            sleeve: 'Full Sleeve',
            pattern: 'Checks',
            neck: 'Collar'
        },
        {
            id: 12,
            title: "T-shirt Men",
            actualPrice: 1000,
            category: "top-wear",
            color: "Black",
            desc: "Casual Black T-shirt For Men",
            image: img12,
            listed: { wishListed: false, cartListed: false, cart: { quantity: 0, selectedSize: '' } },
            sizeAvailable: [36, 38, 40, 42],
            material: "Cotton",
            occasion: "Casual",
            price: 750,
            rating: 4.6,
            type: "T-shirt",
            sleeve: 'Half Sleeve',
            pattern: 'Plain',
            neck: 'Round'
        }
    ]

    const [alert, setAlert] = useState(null)

    const showAlert = (msg, type, icon) =>{
        setAlert({msg, type, icon})

        setTimeout(() => {
            setAlert(null)
        }, 1000);
    }

    const [whiteScreen, setWhiteScreen] = useState(false)

    // LocalStorage 
    let localItems = JSON.parse(localStorage.getItem('mensinuniqueItems'))

    const [products, setProducts] = useState(localItems)

    const [radioValue, setRadioValue] = useState(null)

    const [value, setValue] = useState('')

    const [searchBar, setSearchBar] = useState('')

    const [btnActive, setBtnActive] = useState(true);

    const [filterPopUp, setFilterPopUp] = useState(false)

    const [cartItems, setCartItems] = useState([])

    const [quantity, setQuantity] = useState(0)

    const [selectQuantityPopUp, setSelectQuantityPopUp] = useState(null)

    const storeUpdatedProducts = (totalItems) => {
        localStorage.setItem('mensinuniqueItems', JSON.stringify(totalItems))
    }

    if (localItems === null) {
        storeUpdatedProducts(items)
    }

    const eventAfterCartWishlist = (updatedProducts, currentProducts) =>{

        if (radioValue) {
            let sortedProducts;
            if (radioValue === 'low-to-high') {
                sortedProducts = currentProducts.sort((a, b) => {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    return 0
                })
            }
            else if (radioValue === 'high-to-low') {
                sortedProducts = currentProducts.sort((a, b) => {
                    if (b.price > a.price) return 1;
                    if (b.price < a.price) return -1;
                    return 0
                })
            }
            setProducts(sortedProducts)
        }
        else {
            setProducts(currentProducts)
        }

        storeUpdatedProducts(updatedProducts)
    }

    // LocalStorage

    // Wishlist 

    const handleWishlist = (wishListed, id) => {

        let currentItems = [];

        for (let i = 0; i < localItems.length; i++) {

            if (localItems[i].id === id) {
                if (wishListed) {
                    localItems[i].listed.wishListed = false;
                    showAlert('Removed From Wishlist', 'danger', <FavoriteBorder/>)
                }
                else {
                    localItems[i].listed.wishListed = true;
                    showAlert('Added To Wishlist', 'primary', <Favorite/>)
                }
            }

            for (let j = 0; j < products.length; j++) {
                if (localItems[i].id === products[j].id) {
                    currentItems.push(localItems[i])
                }
            }
        }

        eventAfterCartWishlist(localItems, currentItems)
    }
    // Wishlist 

    // Cart 

    const handleCart = (adding, id) => {

        let currentItems = [];

        for (let i = 0; i < localItems.length; i++) {

            if (localItems[i].id === id) {
                if (adding) {
                    localItems[i].listed.cartListed = true;
                    localItems[i].listed.cart.quantity = parseInt(localItems[i].listed.cart.quantity) + 1
                }
                else {
                    localItems[i].listed.wishListed = false;
                    localItems[i].listed.cartListed = true;
                    localItems[i].listed.cart.quantity = parseInt(localItems[i].listed.cart.quantity) + 1
                }
            }

            showAlert('Added To Cart', 'primary', <ShoppingBag  style={{ margin: '0.5rem 0' }}/>)

            for (let j = 0; j < products.length; j++) {
                if (localItems[i].id === products[j].id) {
                    currentItems.push(localItems[i])
                }
            }
        }

        eventAfterCartWishlist(localItems, currentItems)
    }

    const handleSelectQuantityPopUp = (event, {quantity, id}) =>{
        event.preventDefault();
        
        let type = event.target.type;

        if(type === 'submit'){
            if(quantity>5){
                for(let i=0; i<localItems.length; i++){
                    if(localItems[i].id === id){
                        localItems[i].listed.cart.quantity = parseInt(quantity);
                    }
                }
                storeUpdatedProducts(localItems)
                setSelectQuantityPopUp(null)
                setQuantity(0)
                showAlert('Cart Updated', 'primary', <ThumbUp style={{margin: '0.5rem 0'}}/>)
            }
            else{
                showAlert('Quantity must be greather than 5', 'warning', <PriorityHigh style={{margin: '0.5rem 0'}}/>)
            }
        }
        else if(type === 'reset'){
            for(let i=0; i<localItems.length; i++){
                if(localItems[i].id === id){
                    let currentQuantity = parseInt(localItems[i].listed.cart.quantity)
                    localItems[i].listed.cart.quantity = currentQuantity;
                }
            }
            storeUpdatedProducts(localItems)
            setSelectQuantityPopUp(null)
            setQuantity(0)
        }

        let filteredItems = localItems.filter(item=>{
            return item.listed.cartListed
        })
        setCartItems(filteredItems)
    }

    // Cart 

    return <Context.Provider value={{
        alert, setAlert, showAlert, whiteScreen, setWhiteScreen, localItems, 
        products, setProducts, value, setValue, searchBar, setSearchBar, 
        btnActive, setBtnActive,filterPopUp, setFilterPopUp, radioValue, setRadioValue, 
        cartItems, setCartItems, storeUpdatedProducts, handleWishlist, handleCart,
        quantity, setQuantity, selectQuantityPopUp, setSelectQuantityPopUp, 
        handleSelectQuantityPopUp
    }}>
        {props.children}
    </Context.Provider>
}

export default ContextState;