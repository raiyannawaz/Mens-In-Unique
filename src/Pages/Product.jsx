import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import Context from '../ContextAPI/Context';
import { ShoppingCart, Favorite, FavoriteBorder, Star, ThumbUp } from '@mui/icons-material';
const Product = () => {

  let { showAlert, localItems, handleWishlist, handleCart, storeUpdatedProducts } = useContext(Context)

  let param = useParams();

  let filteredProduct = localItems.filter((item) => {
    return item.id === parseInt(param.id)
  })[0]

  let { title, price, desc, image: img, listed, rating, color, actualPrice, id } = filteredProduct;

  let {wishListed} = listed;

  const ratingColor = () => {
    if (rating >= 4) {
      return `rgb(0, 112, 0)`
    }
    else if (rating < 4 && rating >= 3) {
      return `rgb(0, 206, 0)`
    }
    else if (rating < 3 && rating >= 2) {
      return `rgb(209, 224, 0)`
    }
  }

  const handleOnSubmit = (event=>{
    event.preventDefault();

    let target = event.target;
    let text = target.querySelector('p')
    let input = target.querySelector('input');

    if(input.value === ''){
      text.innerHTML = `<span class="text-danger">Please Write Something !</span>`
    }
    else{
      text.innerHTML = `<span class="text-success">Available ✔</span>`
    }
  })

  const handleSizeSelect = (event) => {
    let target = event.target;

    for (let i = 0; i < localItems.length; i++) {
      if (localItems[i].id === id) {
        localItems[i].listed.cart.selectedSize = parseInt(target.textContent)
      }
    }
    storeUpdatedProducts(localItems)
    showAlert(`Selected size ${target.textContent}`, 'primary', <ThumbUp style={{margin: '0.5rem 0'}}/>)

    let sizeBtns = document.querySelectorAll(`.${target.classList[0]}`)

    for(let i=0; i < sizeBtns.length; i++) {
      if (sizeBtns[i] === target) {
        sizeBtns[i].classList.add('bg-primary')
        sizeBtns[i].classList.add('text-white')
      }
      else {
        sizeBtns[i].classList.remove('bg-primary')
        sizeBtns[i].classList.remove('text-white')
      }
    }
  }

  return (
    <div className="product-div">
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-11 col-12 mx-auto">
            <div className="row gy-lg-0 gx-lg-5 gx-0">
              {/* Left */}
              <div className="col-lg-4 col-12">
                <div className="product-img" style={{ height: '350px' }}>
                  <img src={img} className='img-fluid h-100 p-3' alt="" />
                </div>
                <div className="product-content-div-1">
                  <h2>{title}</h2>
                  <h6 className='text-muted'>{desc}</h6>
                  <hr className='mb-2 mt-0' />
                  <div className="d-flex align-items-center">
                    <h4 className='fw-bold m-0 me-2'>₹{price}</h4>
                    <div className="d-flex">
                      <p className='fs-5 my-1 me-2 fw-light'>MRP</p>
                      <p className='fs-5 my-1 me-2 text-decoration-line-through text-muted'> ₹{actualPrice}</p>
                      <p className='fs-5 my-1 me-2 text-danger fw-lighter'>{`Rs.(${actualPrice - price}) Off`}</p>
                    </div>
                  </div>
                </div>
                <p className='text-success mb-2'>Including all the taxes</p>
                <div className="product-content-div-2 d-flex">
                  <button className='px-3 cart me-3' onClick={()=>{handleCart(true, id)}}>Add To Cart <ShoppingCart /></button>
                  <button className='wishlist px-3' onClick={()=>{handleWishlist(wishListed, id)}}>{wishListed ? 'Added' : 'Wishlist'} {wishListed ? <Favorite /> : <FavoriteBorder />}</button>
                </div>
              </div>
              {/* Left */}
              {/* Right */}
              <div className="col-lg-8 col-12">
                <div className="product-info-div-1">
                  <hr />
                  <h3>Product Specification</h3>
                  <div className="row gx-0">
                    <div className="col-lg-4 col-6">
                      <p className='mb-1'><span className='fw-bold'>Color:</span> {color}</p>
                      <p className='mb-1'><span className='fw-bold'>{filteredProduct.material ? 'Material:' : filteredProduct.dialType ? 'Dial-Type:' : ''}</span> {filteredProduct.material ? filteredProduct.material : filteredProduct.dialType ? filteredProduct.dialType : ''}</p>
                      <p className='mb-0'><span className='fw-bold'>{filteredProduct.material ? 'Occasion:' : filteredProduct.strapType ? 'Strap-Type:' : ''}</span> {filteredProduct.material ? filteredProduct.occasion : filteredProduct.strapType ? filteredProduct.strapType : ''}</p>
                    </div>
                    <div className="col-lg-4 col-6">
                      <p className='mb-1'><span className='fw-bold'>{filteredProduct.length ? 'Length:' : filteredProduct.ankleHeight ? 'Ankle Height:' : filteredProduct.sleeve ? 'Sleeve:' : ''}</span> {filteredProduct.length ? filteredProduct.length : filteredProduct.ankleHeight ? filteredProduct.ankleHeight : filteredProduct.sleeve ? filteredProduct.sleeve : ''}</p>
                      <p className='mb-1'><span className='fw-bold'>{filteredProduct.shade ? 'Shade:' : filteredProduct.pattern ? 'Pattern:' : filteredProduct.fastening ? 'Fastening:' : ''}</span> {filteredProduct.shade ? filteredProduct.shade : filteredProduct.pattern ? filteredProduct.pattern : filteredProduct.fastening ? filteredProduct.fastening : ''}</p>
                      <p className='mb-0'><span className='fw-bold'>{filteredProduct.soleMaterial ? 'Sole Material:' : filteredProduct.waistRise ? 'Waist Raise:' : filteredProduct.neck ? 'Neck:' : ''}</span> {filteredProduct.soleMaterial ? filteredProduct.soleMaterial : filteredProduct.waistRise ? filteredProduct.waistRise : filteredProduct.neck ? filteredProduct.neck : ''}</p>
                    </div>
                  </div>
                </div>
                {filteredProduct.sizeAvailable ? <div className="product-info-div-2">
                  <hr />
                  <h3>Size Available</h3>
                  <div className="d-flex">
                    {filteredProduct.sizeAvailable.map((size) => {
                      return <div className={`size me-2 ${parseInt(size) === filteredProduct.listed.cart.selectedSize && filteredProduct.listed.cartListed ? 'bg-primary text-white' : ''}`} onClick={handleSizeSelect} key={size}>{size}</div>
                    })}
                  </div>
                </div> : ''}
                <div className="product-info-div-3">
                  <hr />
                  <div className="d-flex align-items-center">
                    <h3 className='mb-0'>Ratings</h3>
                    <h3 className='mx-2 mb-0'>{rating} <Star fontSize='large' style={{ color: ratingColor(), marginBottom: '0.25 rem' }} /></h3>
                  </div>
                </div>
                <div className="product-info-div-4 pb-lg-0 pb-3">
                  <hr />
                  <h3>Delivery Options</h3>
                  <form onSubmit={handleOnSubmit}>
                    <p>Check Availibility</p>
                    <div className="form-group  w-lg-25 w-50">
                      <input type="text" id='itemVal' className='form-control' />
                    </div>
                    <button className='mt-3 px-3 check-cities'>Check</button>
                  </form>
                </div>
              </div>
              {/* Right */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;