import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { IoMdMenu } from "react-icons/io";
import HeaderNotificationNav from './HeaderNotificationNav';
import HeaderProfileNav from './HeaderProfileNav';
import Breadcrumb from '../Breadcrumb/Breadcrumb';


export default function Header({toggleSidebar, toggleSidebarMd}) {
  return (
    <header  className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
        <Container fluid className=' header-navbar d-flex align-items-center'>
            <Button
                variant='link'
                className='header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none'
                type='button'
                onClick={toggleSidebar}
            >
                <IoMdMenu />
            </Button>
            <Button 
                variant='link'
                className='header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none'
                type='button'
                onClick={toggleSidebarMd}
            >
                <IoMdMenu />
            </Button>

            <div className='header-nav ms-auto'>
                <HeaderNotificationNav />
            </div>
            <div className='header-nav ms-2'>
                <HeaderProfileNav />
            </div>
        </Container>

        <div className=' header-divider border-top my-2 mx-sm-n2' />
        <Container fluid>
            <Breadcrumb />
        </Container>
    </header>
  )
}
