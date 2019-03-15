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
        <i className="fab fa-react" />
        <p className={sidebarWidth === 75 ? 'hide' : 'show'}>Skills</p>
      </SidebarItem>

      <SidebarItem to="/blog" textAlign={sidebarWidth === 75 ? 'center' : 'left'}>
        <i className="fas fa-book" />
        <p className={sidebarWidth === 75 ? 'hide' : 'show'}>Blog</p>
      </SidebarItem>

      <SidebarItem to="/contact" textAlign={sidebarWidth === 75 ? 'center' : 'left'}>
        <i class="far fa-envelope" />
        <p className={sidebarWidth === 75 ? 'hide' : 'show'}>Contact</p>
      </SidebarItem>
    </SidebarStyle>
  )
}
