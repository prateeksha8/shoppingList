import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductReviews from '../product-reviews/ProductReviews'; 

describe('ProductReviews Component', () => {
 
  test('1. renders "Product Reviews" text', () => {
    render(<ProductReviews />);
    const titleElement = screen.getByText(/Product Reviews/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('2. renders an input box for new reviews', () => {
    render(<ProductReviews />);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeInTheDocument();
  });

  test('3. textarea should be empty after form submission', () => {
    render(<ProductReviews />);

   
    const reviewInput = screen.getByPlaceholderText('Write your review here...');
    fireEvent.change(reviewInput, { target: { value: 'This is a great product!' } });

   
    const submitButton = screen.getByRole('button', { name: /submit/i }); 
    fireEvent.click(submitButton);

    expect(reviewInput.value).toBe('');
    
  });
  
test('4. Submits a review and displays it on the screen', async () => {
        render(<ProductReviews productId="someProductId" />);
       const reviewInput = screen.getByPlaceholderText('Write your review here...');
     fireEvent.change(reviewInput, { target: { value: 'Loved this product!' } });

    const submitButton = screen.getByText('Submit Review');
    fireEvent.click(submitButton);
    expect(await screen.findByText('Loved this product!')).toBeInTheDocument();
    
});

});


