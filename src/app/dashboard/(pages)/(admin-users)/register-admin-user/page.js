"use client";
import React from 'react';
import styles from '../../../../../assets/css/pages/adminUser.module.css';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function RegisterUser() {
  return (
    <Form className='shadow p-4 rounded'>
        <Row>
          
          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder='Name'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder='Email'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="text"
                placeholder='Phone NO'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Office ID</Form.Label>
              <Form.Control
                type="text"
                placeholder='Office ID'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Designation</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Designation...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Role</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Role...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder='Product Unit'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder='Address'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder='Password'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder='Confirm Password'
              />
            </Form.Group>
          </Col>

          {/* <Col md={12}>
            <Form.Group className='my-2'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
              />
            </Form.Group>
          </Col> */}
        </Row>

        <div className={styles.addProductBtnWrap}>
          <Button className='px-5 py-2' variant="primary" type="submit">
            Submit
          </Button>
        </div>
    </Form>
  )
}
