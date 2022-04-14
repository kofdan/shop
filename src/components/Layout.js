import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <div className="container">
        <header>
          <nav className="headerNav">
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
            <NavLink to="/login" className={setActive}>
              Login
            </NavLink>
            <NavLink to="/registration" className={setActive}>
              Registration
            </NavLink>
          </nav>
        </header>
      </div>
      
        <Outlet />
      
      <footer>
        &#169;
        {" "}
        <a href="https://github.com/kofdan" className="black">
          Merlikov Vasilii
        </a>{" "}
        <span className="black">{new Date().getFullYear()}</span>
      </footer>
    </>
  );
};

export { Layout };
