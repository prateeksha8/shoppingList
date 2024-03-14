import React from 'react';
import { useParams } from 'react-router-dom';
import Productdetail from '../productdetails';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import ProductReviews from '../product-reviews/ProductReviews';
import './ProductPage.css';

const ProductPage = () => {
    const { productId } = useParams();
    const product = Productdetail.find((p) => p.id.toString() === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const addToWishlist = () => {
        // RIYA Handle your add to wishlist here
        console.log(`Added ${product.Tittle} to wishlist`);
    };

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="star filled" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className="star half-filled" />);
            } else {
                stars.push(<FaRegStar key={i} className="star" />);
            }
        }
        return stars;
    };

    return (
        <>
            <div className="product-page">
                <div className="product-detail-container">
                    <div className="product-image">
                        <img src={product.Img} alt={product.Tittle} />
                    </div>
                    <div className="product-info">
                        <h2>{product.Tittle}</h2>
                        <p className="product-category">{product.cat}</p>
                        <p className="product-price">{product.Price}</p>
                        <div className="product-rating">
                            {renderStars(product.Rating)}
                        </div>
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="add-to-wishlist-btn" onClick={addToWishlist}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <ProductReviews productId={product.id} />
        </>

    );
};

export default ProductPage;
