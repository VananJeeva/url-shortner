import React from 'react'
import { Row, Col, Card, CardTitle, CardBody } from 'reactstrap'
import { useAuth } from '../contexts/auth'

export function Dashboard () {
  const { authData } = useAuth()

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Dashboard</CardTitle>
            <Row className='mt-3'>
              <Col>
                <p>
                  Hi {authData.user.username}
                </p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
