import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Item from '../Item';
import { renderWithProviders } from "../utils/utils-for-tests";

describe('Item Component', () => {
//   it('renders correctly without unexpected changes', () => {
//     const navigation = renderer
//       .create(
//         <Router>
//           <Navigation />
//         </Router>,
//       )
//       .toJSON();
//     expect(navigation).toMatchSnapshot();
//   });

 

  it('renders the forcasts date header', async () => {
    renderWithProviders(<MemoryRouter><Item /></MemoryRouter>);
    screen.debug();
    const forcastHeader= screen.getByText('Forcast Date');
    expect(forcastHeader).toBeInTheDocument();
  });

  it('renders the forcast date correctly', async () => {
    renderWithProviders(
        <MemoryRouter><Item 
    date={'2023-08-02'} 
    sunrise={'06:26 AM'}
     sunset={'06:26 AM'} 
     id={'1234'} 
    /></MemoryRouter>);
    screen.debug();
    const forcastDate = screen.getByText('2023-08-02');
    expect(forcastDate).toBeInTheDocument();
  });

  it('renders sunrise time correctly', async () => {
    renderWithProviders(
        <MemoryRouter><Item 
    date={'2023-08-02'} 
    sunrise={'06:26 AM'}
     sunset={'06:26 AM'} 
     id={'1234'} 
    /></MemoryRouter>);
    screen.debug();
    const forcastSunriseTime = screen.getByText('Sunrise:-06:26 AM');
    expect(forcastSunriseTime).toBeInTheDocument();
  });

  it('renders sunset time correctly', async () => {
    renderWithProviders(
        <MemoryRouter><Item 
    date={'2023-08-02'} 
    sunrise={'06:26 AM'}
     sunset={'09:26 PM'} 
     id={'1234'} 
    /></MemoryRouter>);
    screen.debug();
    const forcastSunsetTime = screen.getByText('Sunset:-09:26 PM');
    expect(forcastSunsetTime).toBeInTheDocument();
  });

});