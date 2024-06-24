import React from 'react'
import img1 from '../Img/shirt.jpg'
import img2 from '../Img/pant.jpg'
import img3 from '../Img/shoes.jpg'
import img4 from '../Img/analogwatch.jpg'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Tooltip } from '@mui/material'

const Category = () => {
    return (
        <div className="container-fluid my-lg-3 my-4 px-4 category">
            <div className="row">
                <div className="col-lg-11 col-10 mx-auto bg-light shadow position-relative pb-lg-0 pb-2 overflow-hidden category-div">
                    <h1 className='pt-4 pb-lg-0 pb-3 mb-0 px-lg-2 px-0'>Shop By Category</h1>
                    <div className="row gx-0">
                        <div className="col-lg-3 col-12 mx-auto">
                            <div className="category-item p-lg-4 p-2">
                                <Link to={'/collections/top-wear'}>
                                    <img src={img1} className='img-fluid' alt="" />
                                </Link>
                                <h3 className='pt-3 mb-lg-0 mb-2 w-100 text-center'>Top-Wear</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 mx-auto">
                            <div className="category-item p-lg-4 p-2">
                                <Link to={'/collections/bottom-wear'}>
                                    <img src={img2} className='img-fluid' alt="" />
                                </Link>
                                <h3 className='pt-3 mb-lg-0 mb-2 w-100 text-center'>Bottom-Wear</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 mx-auto">
                            <div className="category-item p-lg-4 p-2">
                                <Link to={'/collections/foot-wear'}>
                                    <img src={img3} className='img-fluid' alt="" />
                                </Link>
                                <h3 className='pt-3 mb-lg-0 mb-2 w-100 text-center'>Foot-Wear</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 mx-auto">
                            <div className="category-item p-lg-4 p-2">
                                <Link to={'/collections/accessories'}>
                                    <img src={img4} className='img-fluid' alt="" />
                                </Link>
                                <h3 className='pt-3 mb-lg-0 mb-2 w-100 text-center'>Accessories</h3>
                            </div>
                        </div>
                        <Link to='/collections/all' className="side-div" >
                            <Tooltip title='View All'>
                                <button className='arrow-right shadow text-primary'>
                                    <ArrowForwardIcon style={{ fontSize: '3rem' }} />
                                </button>
                            </Tooltip>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;