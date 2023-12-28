"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Dropdown, Nav, NavItem } from 'react-bootstrap'
import { FaUserPlus , FiLogOut   } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


export default function HeaderProfileNav() {
  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" bsPrefix="hide-caret" className="py-0 px-2 rounded-0" id="dropdown-profile">
          <div className="avatar position-relative">
            <Image
              fill
              className="rounded-circle"
              src="/assets/img/avatars/8.jpg"
              alt="user@email.com"
            />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-light fw-bold">Profile</Dropdown.Header>

          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
                <div className=' flex justify-content-left gap-2'>
                    <FaUserPlus />
                    Profile
                </div>
            </Dropdown.Item>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
                <div className=' flex justify-content-left gap-2'>
                    <IoSettingsOutline />
                    Settings
                </div>
            </Dropdown.Item>
          </Link>
        

          {/* <Dropdown.Divider /> */}

          <Dropdown.Item>
            <div className=' flex justify-content-left gap-2'>
                {/* <FiLogOut/> */}
                Settings
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}
