
import LearnSelect from './pages/LearnSelect'
import Trend from './pages/Trend';
import Home from './pages/Home'
import LearnHome from './pages/LearnHome';
import './assets/scss/App.scss';
import Member from './pages/Member';
import LearnPage from './pages/LearnPage';
import LearnGame from './pages/LearnGame';
import LearnGameChoose from './pages/LearnGameChoose';
import Hamburger from './components/Hamburger';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LinkPage from './pages/Linkpage';
import Register from './pages/Register';
import LearnArea from './pages/LearnArea';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Hamburger' element={<Hamburger />}></Route>
        <Route path='/LearnSelect' element={<LearnSelect />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/LearnHome' element={<LearnHome />}></Route>
        <Route path='/LearnPage' element={<LearnPage />}></Route>
        <Route path='/LearnGame' element={<LearnGame />}></Route>
        <Route path='/LearnGameChoose' element={<LearnGameChoose />}></Route>
        <Route path='/Trend' element={<Trend />}></Route>
        <Route path='/Member' element={<Member />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/LearnArea' element={<LearnArea />}></Route>
      </Routes>
    </>
  )
}

export default App
