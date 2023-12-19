import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = () => {
  return (
    <aside className="sidebar show-sidebar">
      <button className="close-btn">
        <IoMdClose />
      </button>
      <div className="side-container">
        <Links styleClass="sidebar-links" />
        <Categories />
      </div>
    </aside>
  )
}

export default Sidebar
