import React from 'react'

import { Row, Col, Card, CardTitle, CardBody } from 'reactstrap'

export function Home () {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Minify your long Urls</CardTitle>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
