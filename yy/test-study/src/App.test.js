import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('axios');

describe('App', () => {
  test('App 렌더링', () => {
    render(<App />);
    screen.getByText('app');
  });
});
