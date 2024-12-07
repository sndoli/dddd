
import React from 'react'
import { BiSupport } from "react-icons/bi";
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
               Nishan's Media
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
    
            <li className='sidebar-list-item'>
                <Link to="/Products">
                    <BsFillArchiveFill className='icon'/> Products
                    </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Sales">
                    <BsFillGrid3X3GapFill className='icon'/> Sales
                    </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Customers">
                    <BsPeopleFill className='icon'/> Customers
                    </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Transections">
                    <BsListCheck className='icon'/> Transections
                    </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Analytics">
                    <BsMenuButtonWideFill className='icon'/> Analytics
                    </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Setting">
                    <BsFillGearFill className='icon'/> Setting
                    </Link>
                
            </li>

            <li className='sidebar-list-item'>
                <Link to="/Support">
                <BiSupport  className='icon'/> Support
                </Link>
                
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar