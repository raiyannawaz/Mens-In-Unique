import { useContext, useEffect, useState } from "react"
import Context from "../ContextAPI/Context"
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import Modal from '../Components/Modal'
import SelectQuanity from '../Components/SelectQuantity'
import { Check, CheckCircle, Clear, ExpandMore, Favorite, Home, LocalShipping, LocationOn, PriorityHigh, ThumbUp } from "@mui/icons-material";
import WhiteScreen from "../Components/WhiteScreen";

const Cart = () => {

    let { showAlert, setWhiteScreen, localItems, storeUpdatedProducts, cartItems, setCartItems, setSelectQuantityPopUp } = useContext(Context);

    useEffect(() => {
        let filteredItems = localItems.filter(item => {
            return item.listed.cartListed
        })

        setCartItems(filteredItems)
    }, [])

    let productsAmount = cartItems.map(item => {
        return item.price * item.listed.cart.quantity
    });

    let totalProductsAmount = cartItems.length > 0 ? productsAmount.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    }) : 0

    let shppingCharges = cartItems.length > 0 ? 100 : 0

    const [promoCodeApplied, setPromoCodeApplied] = useState(false)

    useEffect(() => {
        if (totalProductsAmount < 2500) {
            setPromoCodeApplied(false)
        }
    }, [totalProductsAmount])

    const [addressAdded, setAddressAdded] = useState(false)

    const [addresses, setAddresses] = useState({ add1: '', add2: '', add3: '', add4: '', add5: '', add6: '' })

    const handleChange = (event) => {
        let { name, value } = event.target;
        setAddresses({ ...addresses, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (addresses.add1 === '' || addresses.add2 === '' || addresses.add3 === '' ||
            addresses.add4 === '' || addresses.add5 === '' || addresses.add6 === '') {
            showAlert('Please Dont Leave Any Input Empty', 'warning', <PriorityHigh />)
        }
        else {
            if (addressAdded) {
                showAlert('Address Updated', 'primary', <Home style={{ margin: '0.5rem 0' }} />)
            }
            else {
                setAddressAdded(true)
                showAlert('Address Added', 'primary', <Home style={{ margin: '0.5rem 0' }} />)
            }
        }
    }

    const handlePromoCode = (event) => {
        event.preventDefault();

        let target = event.target;
        let text = target.querySelector('p')
        let input = target.querySelector('input')

        if(cartItems.length === 0){
            showAlert('Please add items', 'danger', <PriorityHigh style={{ margin: '0.5rem 0' }}/>)
        }
        else{
            if (input.value === 'MIU500') {
                if (totalProductsAmount >= 2500) {
                    text.innerHTML = `<span class="text-success">Done</span> <svg class="mb-2 text-success MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckIcon"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>`
                    setPromoCodeApplied(true)
                }
                else {
                    showAlert('Your purchaing amount must be greater than 2500', 'danger', <Clear style={{ margin: '0.5rem 0' }} />)
                }
            }
            else if (input.value === '') {
                text.innerHTML = `<span class="text-danger">Please Write Something !</span>`
            }
            else {
                text.innerHTML = `<span class="text-danger">Invalid Code !</span>`
            }
        }
    }

    const handleRemoveToWishlist = (id) => {
        let filteredItems = cartItems.filter(item => {
            return item.id !== id
        })
        for (let i = 0; i < localItems.length; i++) {
            if (localItems[i].id === id) {
                localItems[i].listed.wishListed = true;
                localItems[i].listed.cartListed = false;
                localItems[i].listed.cart.quantity = 0
            }
        }
        storeUpdatedProducts(localItems)
        setCartItems(filteredItems)
        showAlert('Added To Wishlist', 'primary', <Favorite />)
    }

    const handleRemoveFromCart = (id) => {
        let filteredItems = cartItems.filter(item => {
            return item.id !== id
        })

        for (let i = 0; i < localItems.length; i++) {
            if (localItems[i].id === id) {
                localItems[i].listed.cartListed = false;
                localItems[i].listed.cart.quantity = 0
            }
        }
        storeUpdatedProducts(localItems)
        setCartItems(filteredItems)
        showAlert('Removed From Cart', 'danger', <Clear style={{ margin: '0.5rem 0' }} />)
    }

    const handleChangeQuantity = (event, id) => {
        let value = event.target.value;

        if (value === '+5') {
            setSelectQuantityPopUp({ id })
        }
        else {
            for (let i = 0; i < localItems.length; i++) {
                if (localItems[i].id === id) {
                    localItems[i].listed.cart.quantity = parseInt(value)
                }
            }
            storeUpdatedProducts(localItems)

            let filteredItems = localItems.filter(item => {
                return item.listed.cartListed
            })
            setCartItems(filteredItems)
            showAlert('Cart Updated', 'primary', <ThumbUp style={{ margin: '0.5rem 0' }} />)
        }

    }

    const handleChangeSize = (event, id) => {
        let value = event.target.value;

        for (let i = 0; i < localItems.length; i++) {
            if (localItems[i].id === id) {
                localItems[i].listed.cart.selectedSize = parseInt(value)
            }
        }
        storeUpdatedProducts(localItems)

        let filteredItems = localItems.filter(item => {
            return item.listed.cartListed
        })
        setCartItems(filteredItems)
        showAlert('Cart Updated', 'primary', <ThumbUp style={{ margin: '0.5rem 0' }} />)
    }

    const handleOrderSumit = () => {
        if (cartItems.length === 0) {
            showAlert('Please Add Items', 'danger', <PriorityHigh />)
        }
        else if (totalProductsAmount <= 1000) {
            showAlert('Your purchasing amount must be greater than 1000', 'danger', <PriorityHigh />)
        }
        else if (!addressAdded) {
            showAlert('Please Add Address', 'warning', <PriorityHigh />)
        }
        else {
            setWhiteScreen(true)
            setTimeout(() => {
                showAlert('Please Wait...', 'primary', <div className="spinner-border text-white" style={{ height: '30px', width: '30px' }} role="status">
                    <span></span>
                </div>)

                setTimeout(() => {
                    showAlert('To Deliver', 'primary', <LocalShipping />)

                    setTimeout(() => {
                        showAlert(`${addresses.add1}, ${addresses.add2}, ${addresses.add3}, ${addresses.add4}, ${addresses.add5}, ${addresses.add6} `, 'primary py-2', <LocationOn />)

                        setTimeout(() => {
                            showAlert('Ordered Successsfully', 'success', <CheckCircle style={{ margin: '0.5rem 0' }} />)

                            setTimeout(() => {
                                showAlert('Ordered Successsfully', 'success', <CheckCircle style={{ margin: '0.5rem 0' }} />)
                            }, 1000)

                            setTimeout(() => {
                                setWhiteScreen(false)

                                localStorage.clear('mensinuniqueItems')
                                setCartItems([])
                            }, 2000)

                        }, 3500)

                    }, 2500)

                }, 2500)

            }, 500);
        }
    }


    return (
        <div className="container mt-3 cart pb-lg-0 pb-3">
            <SelectQuanity />
            <WhiteScreen />
            <div className="row gx-3">
                <div className="col-lg-8 col-md-8 col-12 mx-auto">
                    <div className="cart-left-div pb-3">
                        <div className="cart-heading p-3 shadow d-flex justify-content-between align-items-center">
                            <h4 className='m-0'>{cartItems.length === 1 ? `(${cartItems.length} Item)` : `(${cartItems.length} Items)`}</h4>
                            <button className='px-3 enter-address' data-bs-toggle="modal" data-bs-target="#exampleModal">{addressAdded ? 'Edit Address' : 'Add Address'}</button>
                        </div>
                        <Modal addresses={addresses} handleChange={handleChange} handleSubmit={handleSubmit} />
                        {cartItems.length === 0 ? <div className="cart-container bg-white mt-3 shadow">
                            <h2>No Items</h2>
                            <Link to="/collections/all" className='btn-redirect'>Shop Now</Link>
                        </div> : cartItems.map((cartItem) => {
                            return <CartItem cartItem={cartItem} handleRemoveToWishlist={handleRemoveToWishlist} handleRemoveFromCart={handleRemoveFromCart} handleChangeQuantity={handleChangeQuantity} handleChangeSize={handleChangeSize} key={cartItem.id} />
                        })
                        }
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-11 mx-auto cart-right-div">
                    {addressAdded && promoCodeApplied && <div className="container-div delivery-details-div">
                        <div className="p-3 bg-white shadow mb-3">
                            <h4>Deliver To <LocalShipping fontSize="large" /></h4>
                            <p>{addresses.add1}, {addresses.add2}, {addresses.add3}, {addresses.add4}, {addresses.add5}, {addresses.add6}</p>
                        </div>
                    </div>}
                    <div className="container-div promo-code-div">
                        <div className="px-3 py-2 w-100 shadow bg-white">
                            <p className={`m-0 d-flex justify-content-between fs-5 py-1 ${promoCodeApplied && 'text-success'}`} style={{ cursor: 'pointer' }} data-bs-target={'#promoCode'} data-bs-toggle={'collapse'}>
                                <span>{promoCodeApplied ? 'Applied' : 'Apply Promo Code'}</span>
                                <span>{promoCodeApplied ? <Check fontSize="large" /> : <ExpandMore fontSize="large" />}</span>
                            </p>
                            {!promoCodeApplied && <form className="collapse" id='promoCode' onSubmit={handlePromoCode}>
                                <div className="form-group w-75 pt-2">
                                    <input type="text" id='code' className="form-control" />
                                </div>
                                <button type='submit' className='mt-3 mb-1 code-btn'>Apply Code</button>
                                <p className="my-2">Code is MIU500</p>
                            </form>}
                        </div>
                    </div>
                    <div className="container-div order-sum-div">
                        <div className="px-3 py-4 w-100 shadow mt-3">
                            <h3>Order Summary</h3>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <p className='mb-2'>Product Amount</p>
                                <p className='mb-2'>₹{totalProductsAmount}.00</p>
                            </div>
                            {promoCodeApplied && <div className="d-flex justify-content-between">
                                <p className='mb-2'>Promo Code </p>
                                <p className='mb-2'>₹ -500.00</p>
                            </div>}
                            <div className="d-flex justify-content-between">
                                <p className='mb-0'>Shipping Charge</p>
                                <p className='mb-0'>₹{shppingCharges}.00</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h4 className='mb-1'>Total Amount</h4>
                                <h4 className='mb-1'>₹{promoCodeApplied ? totalProductsAmount + shppingCharges - 500 : totalProductsAmount + shppingCharges}.00</h4>
                            </div>
                            <div className="mt-2 w-100 d-flex justify-content-end place-order">
                                <button className='px-3 place-order' onClick={handleOrderSumit}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart