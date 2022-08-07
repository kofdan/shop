import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Header />
        </header>
        <div className="main">
          <Outlet />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export { Layout };
