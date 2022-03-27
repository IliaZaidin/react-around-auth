import {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../utils/auth';

function Login(props) {
  const {
    setEmail,
    setLoggedIn,
    handleLogin,
    handleEmail,
    handlePassword,
  } = props;

  const history = useHistory();

  useEffect(() => {
    auth.checkToken()
    .then((response) => {
      if (response.data.email) {
        setLoggedIn(true);
        setEmail(response.data.email);
        history.push("/");
      }
    });
  }, [])

  return (
    <section className={`auth`}>
      <h2 className={`auth__title`}>Log in</h2>
      <form className={`auth__form`} onSubmit={handleLogin}>
        <input className={`auth__input`} placeholder={`Email`} type="email" onKeyUp={handleEmail}></input>
        <input className={`auth__input`} placeholder={`Password`} type="password" onKeyUp={handlePassword}></input>
        <button className={`auth__submit`} type="submit" >Log in</button>
      </form>
      <Link to='/signup' className={`auth__link`}>Not a member yet? Sign up here!</Link>
    </section>
  );
}

export default Login;