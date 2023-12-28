"use client"
import PaginationComponent from '@/components/PaginationComponent';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from '../../../../../assets/css/pages/category.module.css';

export default function ManageSubCategory() {
  return (
    <div className='shadow p-4 rounded'>
        <div className={styles.proudctPageHeading}>
            <h4>Sub Categories</h4>
        </div>
        <Container>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Category Name</th>
                        <th>Category Description</th>
                        <th>Parent Category</th>
                        <th>Thumbnail</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Fresh Tometo</td>
                        <td>Fresh Tometo from farmer</td>
                        <td>Parent Category</td>
                        <td>Category Thumbnail</td>
                        <td>
                            <div className={styles.productActionButton}>
                                {/* <span> <FaEdit /> </span> */}
                                <span> <FaTrash /> </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className={styles.paginationAlignment}>
                <PaginationComponent />
            </div>
        </Container>
    </div>
  )
}
