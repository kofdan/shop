import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';


import  Homepage  from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registrationpage from './pages/Registrationpage';
import Singlepage from './pages/Singlepage';


function App() {
  return (
    <>



    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/registration' element={<Registrationpage/>} />
        <Route path='/:id' element={<Singlepage/>} />
      </Route>
    </Routes>


    </>
  );
}

export default App;
