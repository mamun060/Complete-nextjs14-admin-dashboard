/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Container, Row, Col, Card, Nav, Button } from "react-bootstrap";

async function getData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'force-cache'});

  if(!res.ok){
    throw new Error('Something is wrong');
  }

  return res.json(); 
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card
            variant={'Secondary'}
            text="dark"
            className="mb-2"
            border="danger"

          >
            <Card.Body>
              <Card.Title>Total Admin Users</Card.Title>
              <Card.Text>
                10+
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            variant={'Secondary'}
            text="dark"
            className="mb-2"
            border="danger"

          >
            <Card.Body>
              <Card.Title>Total Customers</Card.Title>
              <Card.Text>
                10+
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            variant={'Secondary'}
            text="dark"
            className="mb-2"
            border="danger"

          >
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text>
                10+
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            variant={'Secondary'}
            text="dark"
            className="mb-2"
            border="danger"

          >
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <Card.Text>
                10+
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* {
          data.map((item)=>( 
          <Col md={3} key={item.id}>
            <Card
              variant={'primary'}
              text="dark"
              className="mb-2"
            >
              <Card.Header>{item.name}</Card.Header>
              <Card.Body>
                <Card.Title> {item.email} </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          ))
        } */}
      </Row>
    </Container>
  )
}
