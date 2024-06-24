import { useContext } from "react"
import Context from "../ContextAPI/Context"

const SelectQuantity = () =>{

    let {selectQuantityPopUp, handleSelectQuantityPopUp, quantity, setQuantity} = useContext(Context)

    return( selectQuantityPopUp && <div className='pop-up-container'>
        <form className="pop-up shadow" method='post'>
            <div className="pop-up-div-1">
                <h3 className='m-0'><span className="first">Select</span> <span className="second ms-3">Option</span></h3>
            </div>
            <div className="pop-up-div-2">
                <input type="number" value={quantity} onChange={(event)=>{setQuantity(event.target.value)}}/>
            </div>
            <div className="pop-up-div-3 d-flex align-items-center">
                <button type='reset' className='w-50' onClick={(event)=>{handleSelectQuantityPopUp(event, { quantity, id: selectQuantityPopUp.id})}}>Cancel</button>
                <button type='submit' className='w-50' onClick={(event)=>{handleSelectQuantityPopUp(event, { quantity, id: selectQuantityPopUp.id})}}>Ok</button>
            </div>
        </form>
    </div>)
}

export default SelectQuantity;