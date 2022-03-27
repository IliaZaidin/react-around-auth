import { Link } from 'react-router-dom';

function Register(props) {
  const {
    handleRegister,
    handleEmail,
    handlePassword,
  } = props;

  return (
    <section className={`auth`}>
      <h2 className={`auth__title`}>Sign up</h2>
      <form className={`auth__form`} onSubmit={handleRegister}>
        <input className={`auth__input`} placeholder={`Email`} type="email" onKeyUp={handleEmail}></input>
        <input className={`auth__input`} placeholder={`Password`} type="password" onKeyUp={handlePassword}></input>
        <button className={`auth__submit`} type="submit" >Sign up</button>
      </form>
      <Link to='/signin' className={`auth__link`}>Already a member? Log in here!</Link>
    </section>
  );
}

export default Register;