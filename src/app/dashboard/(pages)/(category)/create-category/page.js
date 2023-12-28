"use client";
import React from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import styles from '../../../../../assets/css/pages/category.module.css';

export default function CreateCategory() {
  return (
    <Form className='shadow p-4 rounded'>
      <Row>
        <Col md={6}>
          <Form.Group className='my-2'>
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder='Product Title'
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className='my-2'>
            <Form.Label>Category Thumbnail</Form.Label>
            <Form.Control
              type="file"
              placeholder='Product Unit'
            />
          </Form.Group>
        </Col>

        <Col md={12}>
          <Form.Group className='my-2'>
            <Form.Label>Category Description</Form.Label>
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
