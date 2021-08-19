import React from 'react';
import styled from 'styled-components';
import { useSelector } from '../store';

const Container = styled.div`
  background-color: lightyellow;
  width: 100%;
  height: 100vh;
`;

function Menu_admin() {
  const isLogin = useSelector(state => state.login.login);

  if (!isLogin) return null;
  return (
    <Container>
      <h1>어드민 페이지</h1>
    </Container>
  );
}

export default Menu_admin;
