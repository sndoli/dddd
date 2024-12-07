import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    

<Outlet>

</Outlet>


    </div>
  )
}

export default App