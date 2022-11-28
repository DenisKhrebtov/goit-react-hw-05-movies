import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  width: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0px 15px;
`;

export const AccentText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BackNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0px 5px 5px;
  width: 70px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: tomato;
    color: white;
    scale: 0.995;
    font-weight: 700;
  }
`;

export const List = styled.ul`
  display: flex;
  text-decoration: none;
  list-style-type: none;
`;
