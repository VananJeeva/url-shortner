import React, { useState } from 'react'
import { Router } from './Router'

import { AuthContext } from './contexts/auth'

export function App () {
  const localAuthData = localStorage.getItem('auth')
  var storedAuthData = localAuthData && JSON.parse(localAuthData)

  const [authData, setAuthData] = useState(storedAuthData)

  const setData = (data) => {
    localStorage.setItem('auth', JSON.stringify(data))
    setAuthData(data)
  }

  return (
    <AuthContext.Provider value={{ authData, setAuthData: setData }}>
      <Router />
    </AuthContext.Provider>
  )
}
