import './App.css';
import {Routes, Route} from 'react-router-dom';


import  Homepage  from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registrationpage from './pages/Registrationpage';
import {Layout} from './components/Layout';

function App() {
  return (
    <>



    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/registration' element={<Registrationpage/>} />
      </Route>
    </Routes>


    </>
  );
}

export default App;
