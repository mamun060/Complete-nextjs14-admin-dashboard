import React from 'react';
import {Pagination } from 'react-bootstrap';

export default function PaginationComponent() {
  return (
    <Pagination size='md'>
      {/* <Pagination.First /> */}
      <Pagination.Prev/>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
      {/* <Pagination.Last /> */}
    </Pagination>
  )
}
