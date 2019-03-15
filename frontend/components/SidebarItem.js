import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SidebarItemStyles = styled.li`
  width: 100%;
  padding: 15px;
  font-size: 1.6rem;
  transition: 0.1s ease-in-out;
  height: 50px;
  position: relative;

  a {
    color: #fff;
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 28px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);

    p {
      margin-left: 10px;
      transition: 0.1s ease-in-out;

      &.hide {
        opacity: 0;
      }

      &.show {
        opacity: 1;
      }
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #222;
  }
`;

export default function SidebarItem({ children, to, textAlign }) {
  return (
    <SidebarItemStyles textAlign={textAlign}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </SidebarItemStyles>
  )
}
