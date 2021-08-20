import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { History } from 'history';
import { useSelector } from '../store';
import { useDispatch } from 'react-redux';

import { loginActions } from '../store/auth/login';
import { userActions } from '../store/auth/user';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 1.5rem;

  .link-wrapper {
    font-size: 16px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: black;
    }
    a:visited,
    a:hover,
    a:focus,
    a:active {
      text-decoration: none;
    }
  }
`;

interface HeaderPropsType {
  history: History;
}

function Header({ history }: HeaderPropsType) {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.login);

  const doLogout = () => {
    dispatch(loginActions.logout());
  };

  return (
    <Container>
      <div className="link-wrapper">
        <Link to="/" /* onClick={handleLink} */>홈</Link>
      </div>
      <div className="link-wrapper">
        <Link to="/menu1" /*  onClick={handleLink} */>메뉴1</Link>
      </div>
      <div className="link-wrapper">
        <Link to="/menu2" /* onClick={handleLink} */>메뉴2</Link>
      </div>
      <div className="link-wrapper">
        <Link to="/user" /* onClick={handleLink} */>회원메뉴</Link>
      </div>
      <div className="link-wrapper">
        <Link to="/admin" /*  onClick={handleLink} */>관리자메뉴</Link>
      </div>
      <div className="link-wrapper">
        {isLogin ? (
          <div onClick={doLogout}>로그아웃</div>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </Container>
  );
}

export default withRouter(Header);
