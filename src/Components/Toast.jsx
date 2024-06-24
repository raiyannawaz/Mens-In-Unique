const Toast = ({searchBar, handleToastRedirect}) =>{
    return(
        <div className="toast align-items-center mb-3 mx-auto" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        <p className='m-0' style={{height: '20px'}}>{searchBar}</p>
                    </div>
                    <button type="button" onClick={handleToastRedirect} className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div> 
    )
}

export default Toast