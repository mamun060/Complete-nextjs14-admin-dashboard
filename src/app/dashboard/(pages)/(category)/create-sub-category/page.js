"use client";
import React from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import styles from '../../../../../assets/css/pages/category.module.css';


export default function CreateSubCategeory() {
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
            <Form.Label>Category Description</Form.Label>
            <Form.Control
              type="text"
              placeholder='Product Short Description'
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
       
        <Col md={6}>
          <Form.Group className='my-2'>
            <Form.Label>Select Parent Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Category...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
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
