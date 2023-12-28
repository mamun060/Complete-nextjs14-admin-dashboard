"use client";
import Breadcrumb from '@/AdminLayout/Breadcrumb/Breadcrumb'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import styles from '../../../../../assets/css/pages/product.module.css';
import PaginationComponent from '@/components/PaginationComponent';
import { FaEye , FaEdit , FaTrash  } from "react-icons/fa";
import SingleProductModal from '@/components/SingleProductModal';

export default function ProductPage() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='shadow p-4 rounded'>
            <div className={styles.proudctPageHeading}>
                <h4>Manage Product</h4>
            </div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Fresh Tometo</td>
                            <td>Fresh Tometo from farmer</td>
                            <td>Kachabazar</td>
                            <td>Kachabazar</td>
                            <td>KG</td>
                            <td>50.00Tk</td>
                            <td>
                                <div className={styles.productActionButton}>
                                    <span onClick={() => setModalShow(true)}>
                                        <FaEye /> 
                                    </span>
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
                <SingleProductModal show={modalShow} onHide={()=> setModalShow(false)} />
            </Container>
        </div>
    )
}
