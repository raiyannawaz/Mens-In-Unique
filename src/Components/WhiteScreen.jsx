import { useContext } from "react"
import Context from "../ContextAPI/Context"

const WhiteScreen = () =>{
    let {whiteScreen} = useContext(Context);

    return whiteScreen && <div className='white-screen h-100 w-100'></div>
}

export default WhiteScreen