const Modal = ({addresses, handleChange, handleSubmit}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Address</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method='post' onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" name="add1" placeholder='Flat No / House No / Apartment' value={addresses.add1} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" name="add2" placeholder='Street / Colony / Area' value={addresses.add2} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" name="add3" placeholder='Town / Village' value={addresses.add3} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" name="add4" placeholder='City / District' value={addresses.add4} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" name="add5" placeholder='State / Provision' value={addresses.add5} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="add6" placeholder='Country' value={addresses.add6} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className={`px-2 btn-modal-submit`} data-bs-target={addresses.add1 && addresses.add2 && addresses.add3 && addresses.add4 && addresses.add5 && addresses.add6 ? '#exampleModal' : ''} data-bs-toggle={ addresses.add1 && addresses.add2 && addresses.add3 && addresses.add4 && addresses.add5 && addresses.add6 ? 'modal' : ''} id='saveBtn'>Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;