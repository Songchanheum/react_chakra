import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import './App.css';
import { History } from 'history';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { loginActions } from './store/auth/login';
import Auth from './components/HOC/authCheck';

const Home = React.lazy(() => import('./pages/Home'));
const Menu1 = React.lazy(() => import('./pages/Menu1'));
const Menu2 = React.lazy(() => import('./pages/Menu2'));
const Menu_user = React.lazy(() => import('./pages/Menu_user'));
const Menu_admin = React.lazy(() => import('./pages/Menu_admin'));
const login = React.lazy(() => import('./pages/Login'));
interface HistoryType {
  customHistory: History;
}

function App({ customHistory }: HistoryType) {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(loginActions.login({ username: 'SJMNC', password: 'high' })); // 관리자
    dispatch(loginActions.login({ username: 'TEST', password: 'high' })); // 유저
  }, []);

  return (
    <>
      <Router history={customHistory}>
        <Header />
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/" exact component={Auth(Home, 2)} />
            <Route path="/menu1" component={Auth(Menu1, 2)} />
            <Route path="/menu2" component={Auth(Menu2, 2)} />
            <Route path="/user" component={Auth(Menu_user, 1)} />
            <Route path="/admin" component={Auth(Menu_admin, 0)} />
            <Route path="/login" component={Auth(login, 3)} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
