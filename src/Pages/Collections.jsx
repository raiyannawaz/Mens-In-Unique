import { useContext, useEffect } from 'react';
import Context from '../ContextAPI/Context'
import Collection from '../Components/Collection'
import FilterPopUp from '../Components/FilterPopUp'
import Toast from '../Components/Toast'
import { FilterAlt } from '@mui/icons-material';
import FilterBtns from '../Components/FilterBtns'
import { useNavigate, useParams } from 'react-router-dom';

const Collections = () => {

    let { localItems, products, setProducts, setValue, btnActive, setBtnActive, searchBar, setFilterPopUp, setRadioValue } = useContext(Context);

    let { filter } = useParams();

    let navigate = useNavigate()

    const handleCategory = () => {
        let filteredItems = localItems.filter(item => {
            return item.category === filter
        })

        if (filter === 'all') {
            setProducts(localItems)
        }
        else {
            setProducts(filteredItems)
        }
        setRadioValue(null)
    }

    const handleToastRedirect = () => {
        navigate('/collections/all')
        setValue('')
        setBtnActive(true)
        setProducts(localItems)
    }

    useEffect(() => {
        handleCategory()
    }, [filter])

    return (

        <div className="container py-lg-4 py-3 collections">

            <FilterPopUp />

            <FilterBtns btnActive={btnActive} filter={filter} />

            <Toast searchBar={searchBar} handleToastRedirect={handleToastRedirect} />

            <div className="row g-lg-4 g-2">
                {products.length > 0 ? products.map((product) => {
                    return <div className="col-lg-3 col-md-4 col-6" key={product.id}>
                        <Collection product={product} />
                    </div>
                }) : <div className='mx-auto text-center py-3'><h2>No Products Found</h2></div>}
            </div>

            {products.length > 0 ? <button className="filter-btn shadow" onClick={() => { setFilterPopUp(true) }}>
                <FilterAlt fontSize='large' />
            </button> : ''}
        </div>
    )
}

export default Collections;