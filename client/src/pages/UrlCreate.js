import React from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap'
import { urlCreate } from '../utils/api'
import { useHistory } from 'react-router-dom'

export function UrlCreate () {
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onSubmit = function (data) {
    urlCreate(data).then(response => {
      if (response) {
        history.push('/dashboard')
      }
    })
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Create Url</CardTitle>
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
                    Create
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
