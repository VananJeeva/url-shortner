import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../utils/api'
import { useAuth } from '../contexts/auth'
import { Row } from 'reactstrap'

export function Logout () {
  const history = useHistory()

  const { setAuthData } = useAuth()

  useEffect(() => {
    logout().then(response => {
      setAuthData(null)
      history.push('/login')
    })
  })

  return (
    <Row />
  )
}
