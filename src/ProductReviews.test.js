import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductReviews from 'C:/Users/Manish/Desktop/shoppingList/src/product-reviews/ProductReviews'; 

describe('ProductReviews Component', () => {
 
  test('renders "Product Reviews" text', () => {
    render(<ProductReviews />);
    const titleElement = screen.getByText(/Product Reviews/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders an input box for new reviews', () => {
    render(<ProductReviews />);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeInTheDocument();
  });

  test('textarea should be empty after form submission', () => {
    render(<ProductReviews />);

   
    const reviewInput = screen.getByPlaceholderText('Write your review here...');
    fireEvent.change(reviewInput, { target: { value: 'This is a great product!' } });

   
    const submitButton = screen.getByRole('button', { name: /submit/i }); 
    fireEvent.click(submitButton);

    expect(reviewInput.value).toBe('');
    
  });
});
