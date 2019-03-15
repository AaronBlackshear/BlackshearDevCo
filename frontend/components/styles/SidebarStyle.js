import styled from 'styled-components';

const SidebarStyle = styled.div`
  width: ${props => `${props.width}px` || '250px'};
  background-color: ${props => props.background || '#333'};
  color: ${props => props.color || '#fff'};
  height: 100vh;
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.2s ease-in-out;
  padding: 10px 0px;
`;

export default SidebarStyle;
