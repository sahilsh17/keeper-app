import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'


const Nav = styled.div`
  background: #f5ba13;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  `;


const NavIcons = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const Sidebar = () => {
  return (
    <>
      <Nav>
      <NavIcons>
        <FaIcons.FaBars/>
      </NavIcons>
      </Nav>
    </>
  )
}

export default Sidebar
