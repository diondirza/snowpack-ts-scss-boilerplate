import { expect } from '@esm-bundle/chai';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { App } from './App';

describe('<App>', () => {
  it('renders learn react link', () => {
    render(<App />);

    expect(document.body.contains(screen.getByText(/learn react/i))).to.true;
  });
});
