"use client";
import classNames from 'classnames';
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton } from 'react-bootstrap';
import { MdDashboard , MdKeyboardArrowUp } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";

const SidebarNavItem = ({icon, children, href}) => {
    return (
      <Nav.Item>
        <Link href={href} passHref legacyBehavior>
          <Nav.Link className="px-3 py-2 d-flex align-items-center gap-2">
            {icon ? <span>{icon}</span>
              : <span className="nav-icon ms-n3" /> }
            {children}
          </Nav.Link>
        </Link>
      </Nav.Item>
    )
}

const SidebarNavTitle = ({children}) => {
    return (
      <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
    )
}

const SidebarNavGroupToggle = ({eventKey, icon, children, setIsShow}) => {
    const { activeEventKey } = useContext(AccordionContext)
    const decoratedOnClick = useAccordionButton(eventKey)
    const isCurrentEventKey = activeEventKey === eventKey
  
    useEffect(() => {
      setIsShow(activeEventKey === eventKey)
    }, [activeEventKey, eventKey, setIsShow])
  
    return (
      <Button
        variant="link"
        type="button"
        className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
          collapsed: !isCurrentEventKey,
        })}
        onClick={decoratedOnClick}
      >
        {/* <span>{icon}</span> */}
        {children}
        <div className="nav-chevron ms-auto text-end">
          <span size="xs">{icon}</span>
        </div>
      </Button>
    )
  }

const SidebarNavGroup = ({ toggleIcon,toggleText, children}) => {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <Accordion as="li" bsPrefix="nav-group" className={classNames({ show: isShow })}>
      <SidebarNavGroupToggle icon={toggleIcon} eventKey="0" setIsShow={setIsShow}>{toggleText}</SidebarNavGroupToggle>
        <Accordion.Collapse eventKey="0">
          <ul className="nav-group-items list-unstyled">
            {children}
          </ul>
      </Accordion.Collapse>
    </Accordion>
  )
}


  
export default function SiderbarNav() {
  return (
    <ul className="list-unstyled text-left ">
    <SidebarNavItem href="/dashboard" icon={<MdDashboard />}>
     Dashboard
      {/* <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small> */}
      {/* <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small> */}
    </SidebarNavItem>
   
    <SidebarNavTitle>Product Module</SidebarNavTitle>
    {/* <SidebarNavItem icon={<BsArrowRight />} href={'/dashboard/users'}>Users</SidebarNavItem> */}

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Products">
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/manage-product">Manage-Products</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/add-product">Add-Product</SidebarNavItem>
    </SidebarNavGroup>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Categories">
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/manage-category">Manage-Categories</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/create-category">Create-Category</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/manage-sub-category">Manage-Sub-Category</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/create-sub-category">Create-Sub-Category</SidebarNavItem>
    </SidebarNavGroup>

    <SidebarNavTitle>Users and Permission</SidebarNavTitle>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Manage Admin Users">
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/admin-users">All-Admin</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/register-admin-user">Add-New-Admin</SidebarNavItem>
    </SidebarNavGroup>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Manage Users">
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/all-users">All-Users</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="/dashboard/add-user">Add-New-User</SidebarNavItem>
    </SidebarNavGroup>

    <SidebarNavTitle>manage order</SidebarNavTitle>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Manage Order">
      <SidebarNavItem  icon={<BsArrowRight />} href="/dashboard/manage-order">All-Order</SidebarNavItem>
      <SidebarNavItem  icon={<BsArrowRight />} href="/dashboard/add-order">Add-Order</SidebarNavItem>
    </SidebarNavGroup>

    {/* <SidebarNavItem icon={<BsArrowRight />} href={'/dashboard/product'}>Product</SidebarNavItem> */}
     
    
    {/* <SidebarNavTitle>Components</SidebarNavTitle>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp />} toggleText="Settings">
      <SidebarNavItem icon={<BsArrowRight />} href="#">Add-Logo</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="#">Home-Banner</SidebarNavItem>
    </SidebarNavGroup>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Buttons">
      <SidebarNavItem icon={<BsArrowRight />} href="#">Buttons</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="#">Buttons Group</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="#">Dropdowns</SidebarNavItem>
    </SidebarNavGroup>
 
    <SidebarNavItem icon={<MdDashboard />} href="#">
      Widgets
      <small className="ms-auto"><Badge bg="info">NEW</Badge></small>
    </SidebarNavItem> */}

    <SidebarNavTitle>Extras</SidebarNavTitle>

    <SidebarNavGroup toggleIcon={<MdKeyboardArrowUp   />} toggleText="Pages">
      <SidebarNavItem icon={<BsArrowRight />} href="/">Login</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="register">Register</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="#">Error 404</SidebarNavItem>
      <SidebarNavItem icon={<BsArrowRight />} href="#">Error 500</SidebarNavItem>
    </SidebarNavGroup>

    {/* <SidebarNavItem icon={<BsArrowRight />} href='#'>Log-Out</SidebarNavItem> */}
  </ul>
  )
}
