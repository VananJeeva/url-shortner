import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'

export function Router () {
  return (
    <BrowserRouter>
      <Suspense>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
