import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Purchases from './Pages/Purchases/Purchases';
import Reviews from './Pages/Reviews/Review';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/purchases' element={<Purchases/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
