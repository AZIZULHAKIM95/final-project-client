import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchases from './Pages/Purchases/Purchases';
import Reviews from './Pages/Reviews/Review';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageAllProduct from './Pages/Dashboard/ManageAllProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/purchases' element={
          <RequireAuth>
            <Purchases/>
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
           <Route index element={<MyOrder></MyOrder>}></Route>
           <Route path="addaReview" element={<AddAReview></AddAReview>}></Route>
           <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
           <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
           <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
           <Route path="manageProduct" element={<ManageAllProduct></ManageAllProduct>}></Route>
        </Route>
        <Route path='/myportfolio' element={<MyPortfolio/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
