import React from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap'
import { register as apiRegister } from '../utils/api'
import { useHistory } from 'react-router-dom'

export function Register () {
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onSubmit = function (data) {
    apiRegister(data).then(response => {
      if (response) {
        history.push('/login')
      }
    })
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Register</CardTitle>
            <Row className='mt-3'>
              <Col>
                <FormGroup>
                  <Label>
                    Username
                  </Label>
                  <Input
                    name='username'
                    innerRef={register({
                      required: 'Please enter username'
                    })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    Email
                  </Label>
                  <Input
                    name='email'
                    innerRef={register({
                      required: 'Please enter email'
                    })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    Password
                  </Label>
                  <Input
                    name='password'
                    innerRef={register({
                      required: true,
                      minLength: 6
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
