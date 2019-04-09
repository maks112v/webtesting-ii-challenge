import React from 'react';
import { render, fireEvent, getAllByDisplayValue, getAllByTestId } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders buttons', () => {
    render(<Dashboard />)
  })
});