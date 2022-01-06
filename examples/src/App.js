import * as React from 'react'

import { Greet } from './Greet'

import { ShepherdProvider, Farmyard } from 'js-shepherd'

export const App = () => (
  <ShepherdProvider>
    <Farmyard />
    <Greet />
  </ShepherdProvider>
)
