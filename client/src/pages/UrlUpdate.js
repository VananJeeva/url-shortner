import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap'
import { urlDetails, urlUpdate } from '../utils/api'
import { useHistory, useParams } from 'react-router-dom'

export function UrlUpdate () {
  const history = useHistory()
  const { _id } = useParams()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    urlDetails(_id).then(response => {
      setValue('originalUrl', response.url.originalUrl)
    })
  }, [])
  const onSubmit = function (data) {
    urlUpdate(_id, data).then(response => {
      history.push('/dashboard')
    })
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Update Url</CardTitle>
            <Row className='mt-3'>
              <Col>
                <FormGroup>
                  <Label>
                    Original Url
                  </Label>
                  <Input
                    name='originalUrl'
                    innerRef={register({
                      validate: value => validator.isURL(value)
                    })}
                  />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Row>
              <Col>
                <div className='d-flex align-items-center justify-content-end'>
                  <Button type='submit' onClick={handleSubmit(onSubmit)}>
                    Update
                  </Button>
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}
