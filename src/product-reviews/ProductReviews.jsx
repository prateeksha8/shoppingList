import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './ProductReviews.css';

const ProductReviews = ({ productId }) => {
    const { user, isAuthenticated } = useAuth0();
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [editReviewIndex, setEditReviewIndex] = useState(null);

    
    useEffect(() => {
        const productReviews = localStorage.getItem(`reviews_${productId}`);
        setReviews(productReviews ? JSON.parse(productReviews) : []);
    }, [productId]);

   
    const submitReview = (event) => {
        event.preventDefault();
        if (!newReview.trim()) return;

        const reviewObject = {
            text: newReview,
            
            user: isAuthenticated ? { id: user.sub, name: user.name || "Verified User" } : null,
            verifiedUser: isAuthenticated,
        };

        let updatedReviews;
        if (editReviewIndex !== null) {
            updatedReviews = [...reviews];
            updatedReviews[editReviewIndex] = reviewObject;
            setEditReviewIndex(null); 
        } else {
            updatedReviews = [...reviews, reviewObject];
        }

        setReviews(updatedReviews);
        localStorage.setItem(`reviews_${productId}`, JSON.stringify(updatedReviews));
        setNewReview('');
    };

    
    const renderReview = (review, index) => {
        return (
            <li key={index}>
                {review.text}
                {review.verifiedUser && review.user ? (
                    <span className="review-user verified"> - {review.user.name} (Verified User)</span>
                ) : (
                    <span className="review-user unverified"> - Anonymous</span>
                )}
                {review.user && isAuthenticated && user.sub === review.user.id && (
                    <div className="review-actions">
                        <button onClick={() => setEditReviewIndex(index)}>Edit</button>
                        <button onClick={() => deleteReview(index)}>Delete</button>
                    </div>
                )}
            </li>
      
        );
    };

   
    const deleteReview = (index) => {
        const updatedReviews = reviews.filter((_, reviewIndex) => reviewIndex !== index);
        setReviews(updatedReviews);
        localStorage.setItem(`reviews_${productId}`, JSON.stringify(updatedReviews));
    };

    return (
        <div className="ProductReviews">
            <h3>Product Reviews</h3>
            <div>
                {reviews.length > 0 ? (
                    <ul>{reviews.map(renderReview)}</ul>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
            <form onSubmit={submitReview}>
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review here..."
                ></textarea>
                <button type="submit">{editReviewIndex !== null ? 'Update Review' : 'Submit Review'}</button>
            </form>
        </div>
    );
};

export default ProductReviews;
