import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import AuthRoute from './components/AuthRoute'
import BeforeAuthRoute from './components/BeforeAuthRoute'
import { Logout } from './pages/Logout'

export function Router () {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Suspense>
          <Switch>
            <Route exact path='/' component={Home} />
            <BeforeAuthRoute exact path='/register' component={Register} />
            <BeforeAuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/dashboard' component={Dashboard} />
            <AuthRoute exact path='/logout' component={Logout} />
          </Switch>
        </Suspense>
      </Container>
    </BrowserRouter>
  )
}
