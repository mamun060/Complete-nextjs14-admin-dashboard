"use client";
import Breadcrumb from '@/AdminLayout/Breadcrumb/Breadcrumb'
import { useState } from 'react'
import { Badge, Container, Table } from 'react-bootstrap';
import styles from '../../../../../assets/css/pages/product.module.css';
import PaginationComponent from '@/components/PaginationComponent';
import { FaEdit , FaTrash  } from "react-icons/fa";

export default function AllOrder() {
    return (
        <div className='shadow p-4 rounded'>
            <div className={styles.proudctPageHeading}>
                <h4>Manage Order</h4>
            </div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Order-ID</th>
                            <th>Billing-Name</th>
                            <th>Billing-Email</th>
                            <th>Total-Amount</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Payment-Status</th>
                            <th>Delivery-Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>idol-1001</td>
                            <td>Name</td>
                            <td>user@gmail.com</td>
                            <td>500Tk</td>
                            <td>Watermalon</td>
                            <td>5</td>
                            <td>
                                <Badge bg='success'>Success</Badge>
                            </td>
                            <td>
                                <Badge bg='danger'>Success</Badge>
                            </td>
                            <td>26/12/2023</td>
                            <td>
                                <div className={styles.productActionButton}>
                                    <span> <FaEdit /> </span>
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
