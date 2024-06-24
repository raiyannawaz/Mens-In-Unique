import { Link } from "react-router-dom";

const FilterBtns = ({ btnActive, filter }) => {
    return( btnActive && <div className="pb-lg-4 pb-3 row gy-lg-0 gy-2 justify-content-center align-items-center">
        <Link to={'/collections/all'} className='col-auto'><button className={`${filter === 'all' ? 'active' : ''} btn-category px-lg-3`}>All</button></Link>
        <Link to={'/collections/top-wear'} className='col-auto'><button className={`${filter === 'top-wear' ? 'active' : ''} btn-category px-lg-3`}>Top-Wear</button></Link>
        <Link to={'/collections/bottom-wear'} className='col-auto'><button className={`${filter === 'bottom-wear' ? 'active' : ''} btn-category px-lg-3`}>Bottom-Wear</button></Link>
        <Link to={'/collections/foot-wear'} className='col-auto'><button className={`${filter === 'foot-wear' ? 'active' : ''} btn-category px-lg-3`}>Foot-Wear</button></Link>
        <Link to={'/collections/accessories'} className='col-auto'><button className={`${filter === 'accessories' ? 'active' : ''} btn-category px-lg-3`}>Accessories</button></Link>
    </div>
    )
}

export default FilterBtns;