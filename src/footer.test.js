// src/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('renders the footer with the correct text', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/© 2024 DEV@Deakin. All rights reserved./i);
  expect(footerElement).toBeInTheDocument();
});
