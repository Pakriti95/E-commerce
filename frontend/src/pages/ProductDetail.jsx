import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/product.css';

const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch single product
  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();

        setProduct(data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProduct();

  }, [id]);



  // ADD TO CART FUNCTION
  const handleToCart = () => {
     console.log(product);

    // product check
    if (!product) {
      alert('Product not found');
      return;
    }

    // stock check
if (product.stock <= 0) {
  alert('Out Of Stock');
  return;
}

    const cartProduct = {
  _id: product._id,
  name: product.name,
  image: product.imageUrl,
  price: product.price,
  category: product.category,
  stock: product.stock,
  quantity: 1,
};

    // redux dispatch
    dispatch(addToCart(cartProduct));

    // local storage save
    const existingCart =
      JSON.parse(localStorage.getItem('cartItems')) || [];

    // already product exist or not
    const itemExist = existingCart.find(
      (item) => item._id === cartProduct._id
    );

    let updatedCart;

    if (itemExist) {

      updatedCart = existingCart.map((item) =>
        item._id === cartProduct._id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    } else {

      updatedCart = [...existingCart, cartProduct];
    }

    // save updated cart
    localStorage.setItem(
      'cartItems',
      JSON.stringify(updatedCart)
    );

    alert(`${product.name} Added To Cart`);
  };



  // loading
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  // no product
  if (!product) {
    return <h2 className="loading">Product Not Found</h2>;
  }



  return (

    <div className="product-detail-container">

      <div className="product-detail-card">

        {/* LEFT IMAGE */}
        {/* LEFT IMAGE */}
        <div className="product-image-section">

        <img
            src={product.imageUrl}
            alt={product.name}
            className="product-detail-image"
          />

        </div>


        {/* RIGHT INFO */}
        <div className="product-info-section">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          {/* <div className="rating">
            ⭐⭐⭐⭐☆ <span>(4.5)</span>
          </div> */}

          <h2 className="price">
            ₹ {product.price}
          </h2>

          <p className="description">
            {product.description}
          </p>

          <div className="stock">

            Status :

            <span>
          {product.stock > 0
              ? ' In Stock'
              : ' Out Of Stock'}
            </span>

          </div>


          {/* BUTTONS */}
          <div className="button-group">

            <button
              className="add-cart-btn"
              onClick={handleToCart}
            >
              Add To Cart
            </button>

            <Link to="/">

              <button className="back-btn">
                Back
              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;