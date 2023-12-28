"use client";
import React, { useEffect, useState } from 'react'
import SiderbarNav from './SiderbarNav';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import "../../assets/adminLayout/_mainadmin.scss";

export default function Sidebar({isShow, isShowMd}) {
    const [isNarrow, setIsNarrow] = useState(false)
  
    const toggleIsNarrow = () => {
      const newValue = !isNarrow
      localStorage.setItem('isNarrow', newValue ? 'true' : 'false')
      setIsNarrow(newValue)
    }
  
    // On first time load only
    useEffect(() => {
      if (localStorage.getItem('isNarrow')) {
        setIsNarrow(localStorage.getItem('isNarrow') === 'true')
      }
    }, [setIsNarrow])
  
    return (
      <div
        className={classNames('sidebar d-flex flex-column position-fixed h-100', {
          'sidebar-narrow': isNarrow,
          show: isShow,
          'md-hide': !isShowMd,
        })}
        id="sidebar"
      >
        
        <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
          <h2 className="font-bold">Logo</h2>
        </div>
  
        <div className="sidebar-nav flex-fill">
          <SiderbarNav />
        </div>
  
        <Button
          variant="link"
          className="sidebar-toggler d-none d-md-inline-block rounded-0 text-start pe-4 fw-bold shadow-none text-decoration-none"
          onClick={toggleIsNarrow}
          type="button"
          aria-label="sidebar toggler"
        >
          Log-Out
        </Button>
      </div>
    )
}


export const SidebarOverlay = ({ isShowSidebar ,toggleSidebar})=> {
    return (
      <div
        tabIndex={-1}
        aria-hidden
        className={classNames('sidebar-overlay position-fixed top-0 bg-dark w-100 h-100 opacity-50', {
          'd-none': !isShowSidebar,
        })}
        onClick={toggleSidebar}
      />
    )
}
  
  