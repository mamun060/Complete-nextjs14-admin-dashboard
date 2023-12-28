"use client";
import React, {useState} from 'react';
import styles from '../../../../../assets/css/pages/adminUser.module.css';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import PaginationComponent from '@/components/PaginationComponent';
import { Badge, Container, Table } from 'react-bootstrap';
import SingleAdminUserModal from '@/components/SingleAdminUserModal';


export default function UserPage() {
    const [showModal, setModalShow] = useState(false);
    return (
        <div className='shadow p-2 rounded'>
            <div className={styles.proudctPageHeading}>
                <h4>Manage Admin</h4>
            </div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Md AL Mamun</td>
                            <td><Badge bg='info' className='shadow'>IT</Badge></td>
                            <td><Badge bg='success' className='shadow'>Admin</Badge></td>
                            <td>
                                <div className={styles.productActionButton}>
                                    <span onClick={()=> setModalShow(true)}> <FaEye /> </span>
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
            <SingleAdminUserModal show={showModal} onHide={()=> setModalShow(false)} />
        </div>
    )
}
