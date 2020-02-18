import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

function BeforeAuthRoute ({ component: Component, ...rest }) {
  const { authData } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        if (!authData || !authData.token) {
          return (
            <Component {...props} />
          )
        } else {
          return (
            <Redirect
              to={{ pathname: '/dashboard', state: { referer: props.location } }}
            />
          )
        }
      }}
    />
  )
}

export default BeforeAuthRoute
