import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import Homepage from "./pages/Homepage";
import Singlepage from "./pages/SinglePage/Singlepage";
import Loginpage from "./pages/Loginpage";
import Registrationpage from "./pages/Registrationpage";
import Nothingfound from "./pages/Nothingfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="product/:id" element={<Singlepage />} />
          <Route path="registration" element={<Registrationpage />} />
          <Route path="*" element={<Nothingfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
