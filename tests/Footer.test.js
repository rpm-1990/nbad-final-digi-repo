import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.components/Footer'; // Assuming the Footer component is in a separate file

test('renders footer text correctly', () => {
  render(<Footer/>);
  const footerElement = screen.getByText('Website for final project testing purposes only submission by P M Reddy.');
  expect(footerElement).toBeInTheDocument();
});


