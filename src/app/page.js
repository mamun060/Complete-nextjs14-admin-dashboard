"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaUser , FaLock  } from "react-icons/fa6";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={6}>
            <Row>
              <Col md={12} className="bg-white border p-5">
                <div className="">
                  <h1>Login</h1>
                  <p className="text-black-50">Sign In to your account</p>

                  <form>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        name="username"
                        required
                        placeholder="Username"
                        aria-label="Username"
                        defaultValue="Username"
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                       <FaLock  />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        aria-label="Password"
                        defaultValue="Password"
                      />
                    </InputGroup>

                    <Row>
                      <Col xs={6} >
                        <Button className="px-0" variant="link" type="submit"> Forgot password?</Button>
                      </Col>
                      <Col xs={6} className='text-end'>
                        <Button className="px-4" variant="primary" type="submit">Login</Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
              {/* <Col
                md={5}
                className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
              >
                <div className="text-center">
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link href="/register">
                    <button className="btn btn-lg btn-outline-light mt-3" type="button">
                      Register Now!
                    </button>
                  </Link>
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
