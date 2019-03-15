import React, { useState } from 'react';
import SidebarStyle from './styles/SidebarStyle';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(75);

  return (
    <SidebarStyle
      onMouseOver={() => setSidebarWidth(250)}
      onMouseLeave={() => setSidebarWidth(75)}
      width={sidebarWidth}
    >
      <SidebarItem to="/" textAlign={sidebarWidth === 75 ? 'center' : 'left'}>
        <i className="fas fa-home" />
        <p className={sidebarWidth === 75 ? 'hide' : 'show'}>Home</p>
      </SidebarItem>

      <SidebarItem to="/skills" textAlign={sidebarWidth === 75 ? 'center' : 'left'}>
        <i className="fab fa-react"></i>
        <p className={sidebarWidth === 75 ? 'hide' : 'show'}>Skills</p>
      </SidebarItem>
    </SidebarStyle>
  )
}
