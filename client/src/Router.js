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
import { UrlDetails } from './pages/UrlDetails'
import { UrlCreate } from './pages/UrlCreate'
import { UrlUpdate } from './pages/UrlUpdate'
import { Footer } from './components/Footer'

export function Router () {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <div style={{ minHeight: '400px' }}>
          <Suspense>
            <Switch>
              <Route exact path='/' component={Home} />
              <BeforeAuthRoute exact path='/register' component={Register} />
              <BeforeAuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/dashboard' component={Dashboard} />
              <AuthRoute exact path='/logout' component={Logout} />
              <AuthRoute exact path='/url/view/:_id' component={UrlDetails} />
              <AuthRoute exact path='/url/create' component={UrlCreate} />
              <AuthRoute exact path='/url/edit/:_id' component={UrlUpdate} />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}
