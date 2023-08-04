import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';
import { renderWithProviders } from '../utils/utils-for-tests';

describe('Navigation Component', () => {
  it('renders correctly without unexpected changes', () => {
    const navigation = renderer.create;

    expect(navigation).toMatchSnapshot();
  });

  it('renders the search button', async () => {
    renderWithProviders(<Navigation />);
    const searchBtn = screen.getByRole('button');
    expect(searchBtn).toBeInTheDocument();
  });

  it('renders the input bar', async () => {
    renderWithProviders(<Navigation />);
    const inptuBar = screen.getByPlaceholderText(/search for location/i);
    expect(inptuBar).toBeInTheDocument();
  });

  it('should be able to type in input', async () => {
    renderWithProviders(<Navigation />);
    const inptuBar = screen.getByPlaceholderText(/search for location/i);
    fireEvent.change(inptuBar, { target: { value: 'USA' } });
    expect(inptuBar.value).toBe('USA');
  });

  it('should have empty input when add button is clicked', async () => {
    renderWithProviders(<Navigation />);
    const inptuBar = await screen.findByPlaceholderText(/search for location/i);
    const searchBtn = await screen.getByRole('button');
    fireEvent.change(inptuBar, { target: { value: 'USA' } });
    fireEvent.click(searchBtn);
    expect(inptuBar.value).toBe('USA');
  });
});
