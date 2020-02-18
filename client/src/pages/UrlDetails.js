import React, { useState, useEffect } from 'react'
import { Row, Col, Card, CardTitle, CardBody, Badge } from 'reactstrap'
import { urlDetails } from '../utils/api'
import { useParams } from 'react-router-dom'
import { UrlAnalytics } from './UrlAnalytics'

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
              <Col>
                Hits
              </Col>
            </Row>
            {url && (
              <Row className='mt-2' key={url._id}>
                <Col>{url.originalUrl}</Col>
                <Col>
                  <Badge href={url.tinyurl} color='light' target='_blank'>
                    {url.tinyurl}
                  </Badge>
                </Col>
                <Col>{url.hits}</Col>
              </Row>
            )}
            <Row className='mt-5'>
              <Col>
                <div className='d-flex justify-content-center'>
                  <UrlAnalytics _id={_id} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
