import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  gap: 15px;
  justify-content: left;
  align-items: center;
  min-height: 35px;
  padding: 12px 24px;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 25px;
  font-weight: 500;

  &.active {
    color: #ff0000;
  }
`;
