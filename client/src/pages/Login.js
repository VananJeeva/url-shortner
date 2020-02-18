import React from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col, Card, CardTitle, CardBody, FormGroup, Label, Input, CardFooter, Button } from 'reactstrap'
import { authenticate } from '../utils/api'
// import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

export function Login () {
  // const history = useHistory()
  const { setAuthData } = useAuth()
  const { register, handleSubmit } = useForm()

  const onSubmit = function (data) {
    authenticate(data).then(response => {
      setAuthData(response)
      // history.push('/dashboard')
      location.href = '/dashboard'
    })
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle className='text-center'>Login</CardTitle>
            <Row className='mt-3'>
              <Col>
                <FormGroup>
                  <Label>
                    Username or Email
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
                    Password
                  </Label>
                  <Input
                    name='password'
                    type='password'
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
                    Login
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
