import { useContext } from "react";
import Context from "../ContextAPI/Context";

const FilterPop = () => {

    let {showAlert, filterPopUp, products, setProducts, setFilterPopUp, radioValue, setRadioValue} = useContext(Context);

    const onChange = (event) =>{
        setRadioValue(event.target.value)
    }

    const handleFilterPopUp = (event) => {
        event.preventDefault()

        if (radioValue) {
            let sortedProducts;
            if (radioValue === 'low-to-high') {
                sortedProducts = products.sort((a, b) => {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    return 0
                })
                showAlert('Filtered: Low To High', 'primary', '')
            }
            else if (radioValue === 'high-to-low') {
                sortedProducts = products.sort((a, b) => {
                    if (b.price > a.price) return 1;
                    if (b.price < a.price) return -1;
                    return 0
                })
                
                showAlert('Filtered: High To Low', 'primary', '')
            }
            setProducts(sortedProducts)
            setFilterPopUp(false)
        }
        else{
            // alert 
        }
    }

    return( filterPopUp && <div className='pop-up-container'>
        <form className="pop-up shadow" method='post' onSubmit={(event)=>{handleFilterPopUp(event)}}>
            <div className="pop-up-div-1">
                <h3 className='m-0'><span className="first">Select</span> <span className="second ms-3">Option</span></h3>
            </div>
            <div className="pop-up-div-2">
                <div className="filter-radio"><input type="radio" name="filter" value={'low-to-high'} checked={radioValue==='low-to-high'} onChange={onChange}/><span className="first mx-2">Low t</span><span className="second">o High</span></div>
                <div className="filter-radio"><input type="radio" name="filter" value={'high-to-low'} checked={radioValue==='high-to-low'} onChange={onChange}/><span className="first mx-2">High </span><span className="second">to Low</span></div>
            </div>
            <div className="pop-up-div-3 d-flex align-items-center">
                <button type='reset' className='w-50' onClick={()=>{setFilterPopUp(false)}}>Cancel</button>
                <button type='submit' className='w-50'>Ok</button>
            </div>
        </form>
    </div>)
}

export default FilterPop;