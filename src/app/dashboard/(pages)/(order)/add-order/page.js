"use client"
import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import styles from '../../../../../assets/css/pages/product.module.css';

export default function AddOrder() {
  return (
    <Form className='shadow p-4 rounded'>
        <Row>
            <Col md={6}>
                <Form.Group className='my-2'>
                <Form.Label>Select Customer</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Customer...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
            </Col>

            <Col md={6}>
                <Form.Group className='my-2'>
                <Form.Label>Select Product</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Products...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
            </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder='Quantity'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Total-Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder='Amount'
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className='my-2'>
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder='Shipping Address'
              />
            </Form.Group>
          </Col>
        </Row>

        <div className={styles.addProductBtnWrap}>
          <Button className='px-5 py-2' variant="primary" type="submit">
            Submit
          </Button>
        </div>
    </Form>
  )
}
