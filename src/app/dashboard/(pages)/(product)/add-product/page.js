"use client"
import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import styles from '../../../../../assets/css/pages/product.module.css';

export default function AddProduct() {
  return (
    <Form className='shadow p-4 rounded'>
        <Row>
          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder='Product Title'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                type="text"
                placeholder='Product Short Description'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder='Product Price'
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Units</Form.Label>
              <Form.Control
                type="text"
                placeholder='Product Unit'
                multiple={true}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Product Thumbnail</Form.Label>
              <Form.Control
                type="file"
                placeholder='Product Unit'
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Product Gellary</Form.Label>
              <Form.Control
                type="file"
                placeholder='Product Unit'
                multiple
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='my-2'>
              <Form.Label>Sub-Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Sub-Category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className='my-2'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
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
