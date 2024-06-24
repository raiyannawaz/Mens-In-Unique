import { useContext } from "react"
import Context from "../ContextAPI/Context"

const Alert = () => {
    const {alert} = useContext(Context)

    let screenWidth = window.screen.width;

    const alertMsgLength = (length) =>{
        if(length <= 13){
            return '57vw'
        }
        else if(length > 13 && length <= 17){
            return '70vw'
        }
        else if(length > 17 && length <= 21){
            return '75vw'
        }
        else{
            return '85vw'
        }
    }
    return (
        alert && <div className="alerts">
            <div className={`alert bg-${alert.type} py-0 px-3`} style={{minWidth: screenWidth <= 450 && alertMsgLength(alert.msg.length)}}>
                <p className='m-0 fs-6 text-white d-flex align-items-center'>
                    <span>{alert.msg}</span>
                    <span className="px-2">{alert.icon}</span></p>
            </div>
        </div>
    )
}

export default Alert