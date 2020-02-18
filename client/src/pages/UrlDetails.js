import React, { useState, useEffect } from 'react'
import { Row, Col, Card, CardTitle, CardBody } from 'reactstrap'
import { urlDetails } from '../utils/api'
import { useParams } from 'react-router-dom'

export function UrlDetails () {
  const { _id } = useParams()

  const [url, setUrl] = useState(null)

  useEffect(() => {
    urlDetails(_id).then(response => {
      setUrl(response.url)
    })
  }, [])

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Url Details</CardTitle>
            <Row className='bg-secondary text-light mt-3'>
              <Col>
                Original URL
              </Col>
              <Col>
                TinyURL
              </Col>
            </Row>
            {url && (
              <Row className='mt-2' key={url._id}>
                <Col>{url.originalUrl}</Col>
                <Col>{url.tinyurl}</Col>
              </Row>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
