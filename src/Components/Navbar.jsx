import { Link, useLocation } from 'react-router-dom'
import logo from '../Img/logo.png'
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { useContext } from 'react';
import Context from '../ContextAPI/Context';
import * as bootstrap from 'bootstrap';
import { Badge } from '@mui/material';

const Navbar = () => {

    let location = useLocation('')

    let { localItems, setProducts, value, setValue, setBtnActive, setSearchBar, setRadioValue } = useContext(Context)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    let wishlistItemsLength = localItems.filter(item => {
        return item.listed.wishListed;
    }).length

    let cartItemsLength = localItems.filter(item => {
        return item.listed.cartListed;
    }).length

    
    const handleSearchBar = (event) => {
        event.preventDefault();

        let filteredItems = localItems.filter(item => {
            return item.title.toLowerCase().includes(value.toLocaleLowerCase())
        })

        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl, { 'autohide': false })
        })

        if (value === '') {
            setSearchBar('Please Write Something')
            setProducts([])
        }
        else {
            setSearchBar(value)
            setProducts(filteredItems)
        }

        setRadioValue(null)
        toastList[0].show()
        setBtnActive(false)

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className='navbar-brand'><img src={logo} className='img-fluid p-0' alt="" /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname >= '/collections' ? 'active' : ''}`} to="/collections/all">Collections</Link>
                        </li>
                    </ul>
                    <form onSubmit={handleSearchBar}>
                        <div className="d-flex me-3">
                            <input type="text" disabled={location.pathname === '/collections/all' || location.pathname === '/collections/top-wear' || location.pathname === '/collections/bottom-wear' || location.pathname === '/collections/foot-wear' || location.pathname === '/collections/accessories' ? false : true} value={value} onChange={handleChange} className="form-control me-2" placeholder='Search' />
                            <button disabled={location.pathname === '/collections/all' || location.pathname === '/collections/top-wear' || location.pathname === '/collections/bottom-wear' || location.pathname === '/collections/foot-wear' || location.pathname === '/collections/accessories' ? false : true} className='btn btn-outline-success'>Search</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-center align-items-center right-nav pe-lg-0 pe-3">
                    <Link to="/wishlist" className='text-dark position-relative me-2'>
                        <Badge badgeContent={wishlistItemsLength} color='primary'>
                            <Favorite fontSize='large' />
                        </Badge>
                    </Link>
                    <Link to="/cart" className=' text-dark position-relative me-2'>
                        <Badge badgeContent={cartItemsLength} color='primary'>
                            <ShoppingCart fontSize='large' />
                        </Badge>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;