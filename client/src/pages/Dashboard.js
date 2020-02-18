import React, { useState, useEffect } from 'react'
import { Row, Col, Card, CardTitle, CardBody, Button } from 'reactstrap'
import { useAuth } from '../contexts/auth'
import { urlsList } from '../utils/api'
import { useHistory } from 'react-router-dom'

export function Dashboard () {
  const { authData } = useAuth()
  const { history } = useHistory()

  const [urls, setUrls] = useState(null)

  useEffect(() => {
    urlsList().then(response => {
      setUrls(response.urls)
    })
  }, [])

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
            <Row className="mt-3">
              <Col>
                <h6>Your Links</h6>
              </Col>
            </Row>
            <Row className='bg-secondary text-light mt-3'>
              <Col>
                Original URL
              </Col>
              <Col>
                TinyURL
              </Col>
              <Col>
                Actions
              </Col>
            </Row>
            {urls && urls.length && urls.map(
              url => (
                <Row className="mt-2" key={url._id}>
                  <Col>{url.originalUrl}</Col>
                  <Col>{url.tinyurl}</Col>
                  <Col>
                    <Button
                      className="btn btn-primary"
                      onClick={e => {
                        history.push(`/urls/${url._id}`)
                      }}
                    >
                      View
                    </Button>
                  </Col>
                </Row>
              )
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
