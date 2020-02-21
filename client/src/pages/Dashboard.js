import React, { useState, useEffect } from 'react'
import { Row, Col, Card, CardTitle, CardBody, Button, ButtonGroup, Badge } from 'reactstrap'
import { useAuth } from '../contexts/auth'
import { urlsList, urlDelete } from '../utils/api'
import { useHistory } from 'react-router-dom'

export function Dashboard () {
  const { authData } = useAuth()
  const history = useHistory()
  const [urls, setUrls] = useState(null)

  const fetchUrls = () => {
    urlsList().then(response => {
      setUrls(response.urls)
    })
  }
  useEffect(() => {
    fetchUrls()
  }, [])

  const onDelete = (_id) => {
    urlDelete(_id).then(response => {
      fetchUrls()
    })
  }

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
            <Row className='mt-3'>
              <Col>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6>Your Links</h6>
                  <Button
                    onClick={e => {
                      history.push('/url/create')
                    }}
                  >
                    Create
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className='bg-secondary text-light mt-3'>
              <Col xs="6">
                Original URL
              </Col>
              <Col xs="2">
                TinyURL
              </Col>
              <Col xs="2">
                Hits
              </Col>
              <Col xs="2">
                Actions
              </Col>
            </Row>
            {urls && urls.length > 0 && urls.map(
              url => (
                <Row className='mt-2 align-items-center' key={url._id}>
                  <Col xs="6" className="text-wrap">{url.originalUrl}</Col>
                  <Col xs="2">
                    <Badge href={url.tinyurl} color='light' target='_blank' className="d-block text-wrap">
                      {url.tinyurl}
                    </Badge>
                  </Col>
                  <Col xs="2" className="text-wrap">{url.hits}</Col>
                  <Col xs="2">
                    {/* <ButtonGroup> */}
                      <Button
                        className='btn btn-primary'
                        size="sm"
                        onClick={e => {
                          history.push(`/url/view/${url._id}`)
                        }}
                      >
                        View
                      </Button>
                      <Button
                        className='btn btn-primary'
                        size="sm"
                        onClick={e => {
                          history.push(`/url/edit/${url._id}`)
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        className='btn btn-primary'
                        size="sm"
                        onClick={e => {
                          onDelete(url._id)
                        }}
                      >
                        Delete
                      </Button>
                    {/* </ButtonGroup> */}
                  </Col>
                </Row>
              )
            )}
            {urls && urls.length === 0 && (
              <Row className='mt-2'>
                <Col>
                  No results found
                </Col>
              </Row>
            )}
            {!urls && (
              <Row className='mt-2'>
                <Col>
                  Loading...
                </Col>
              </Row>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
