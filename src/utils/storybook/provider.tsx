import React from 'react';
import { MemoryRouter } from 'react-router';

export const RouterProvider: React.SFC = ({ children }) => (
  <MemoryRouter initialEntries={['/']}>
    {children}
  </MemoryRouter>
);
