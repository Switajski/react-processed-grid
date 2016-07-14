import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Hello from './components/Hello'
import DataGridWrapper from './components/DataGridWrapper'

export const routes = (
  <Route component={App}>
    <Route path="/" component={DataGridWrapper} />
  </Route>
)
