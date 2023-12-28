"use client"
import Link from 'next/link';
import React from 'react'
import { Badge, Dropdown, Nav, NavLink } from 'react-bootstrap';
import { MdOutlineNotifications } from "react-icons/md";
import { FaUserPlus , FaShoppingBasket  } from "react-icons/fa";


export default function HeaderNotificationNav() {
  return (
    <Nav>
      <Nav.Item>
        <Dropdown>
          <Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification">
            <MdOutlineNotifications />
            <Badge pill bg="danger" className="position-absolute top-0 right-0">
              5
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pt-0" align="end">
            <Dropdown.Header className="bg-light fw-bold rounded-top">Notifications</Dropdown.Header>
            
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <div className=' flex justify-content-left gap-2'>
                    <FaUserPlus />
                    New user registered
                </div>
              </Dropdown.Item>
            </Link>
         
           
            <Link href="#" passHref legacyBehavior>
              <Dropdown.Item>
                <div className=' flex justify-content-left gap-2'>
                    <FaShoppingBasket />
                    Buy New Item
                </div>
              </Dropdown.Item>
            </Link>
          
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Nav>
  )
}
