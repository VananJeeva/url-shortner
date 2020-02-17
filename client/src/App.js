import React from 'react'
import { Container, Card, CardBody, CardHeader } from 'reactstrap'
import { Router } from './Router'

export function App () {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1 className='text-center'>
            App
          </h1>
        </CardHeader>
        <CardBody>
          <Router />
        </CardBody>
      </Card>
    </Container>)
}
