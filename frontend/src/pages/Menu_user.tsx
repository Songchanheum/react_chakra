import React from 'react';
import styled from 'styled-components';
import { useSelector } from '../store';
import E403Forbidden from './E403Forbidden';

const Container = styled.div`
  background-color: #78ca78;
  width: 100%;
  height: 100vh;
`;

function Menu_user() {
  const isLogin = useSelector(state => state.login.login);

  if (!isLogin) return null;
  return (
    <Container>
      <h1>유저 페이지</h1>
    </Container>
  );
}

export default Menu_user;
