import { useEffect } from 'react';
import './App.css';
import AppRouter from './router/Router';
import { loginSuccessAction, logoutAction } from './redux/login/actions';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

const App = ({history}) => {
  const dispatch = useDispatch();
  const { loginData } = useSelector(state => state);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('loginData'));
    if (!data?.token) {
      dispatch(logoutAction());
      return false
    }else{
      dispatch(loginSuccessAction())
    }
  }, [])

  useEffect(() => {
    if (loginData.isAuthenticated) {
      history.push('/home')
    }else{
      history.push('/login')
    }
  }, [loginData])

  return (
    <div className="container">
      <AppRouter />
    </div>
  );
}

export default withRouter(App);
