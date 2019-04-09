import React from 'react';
import { render, fireEvent, getAllByDisplayValue, getAllByTestId, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from './Display';

describe('<Display />', () => {
  afterEach(cleanup)
  it('render Table', () => {
    render(<Display />)
  })

  it('render Table', () => {
    const {getAllByTestId} = render(<Display ball="3" strike="2" />)
    const total = getAllByTestId('number').map(n => n.textContent);
    expect(total).toHaveLength(2)
  })
});