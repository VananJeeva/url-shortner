import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { useAuth } from '../contexts/auth'

export function Header (props) {
  const history = useHistory()

  const { authData } = useAuth()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand href='/'>TinyURL</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          {(!authData || !authData.token) &&
            <>
              <NavItem>
                <NavLink
                  href='/login' onClick={e => {
                    e.preventDefault()
                    history.push('/login')
                  }}
                >Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/register' onClick={e => {
                    e.preventDefault()
                    history.push('/register')
                  }}
                >Register
                </NavLink>
              </NavItem>
            </>}
          {authData && authData.token &&
            <>
              <NavItem>
                <NavLink
                  href='/dashboard' onClick={e => {
                    e.preventDefault()
                    history.push('/dashboard')
                  }}
                >Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/logout' onClick={e => {
                    e.preventDefault()
                    history.push('/logout')
                  }}
                >Logout
                </NavLink>
              </NavItem>
            </>}
        </Nav>
      </Collapse>
    </Navbar>
  )
}
