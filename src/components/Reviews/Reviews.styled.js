import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 98vw;
  margin: 10px auto;
  list-style: none;
`;

export const ListItem = styled.li`
  background-color: #cceaea;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 5px;
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const Author = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-left: 5px;
`;
