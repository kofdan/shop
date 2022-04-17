import { NavLink } from "react-router-dom";

function Header() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <nav className='topNav'>
        <NavLink to='/' className={setActive}>
          Home
        </NavLink>
        <NavLink to='/login' className={setActive}>
          Login
        </NavLink>
        <NavLink to='/registration' className={setActive}>
          Registration
        </NavLink>
      </nav>
    </>
  );
}

export { Header };
