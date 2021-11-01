import * as React from 'react';

import { Greet } from './Greet';

import { ShepherdProvider, Farmyard } from '../../dist/index';

export const App = () => (
  <ShepherdProvider>
    <Farmyard />
    <Greet />
  </ShepherdProvider>
);
