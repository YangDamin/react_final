
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignupFinal from './User/SignupFinal';
import MyFeed from './Main/MyFeed';
import Write from './Main/Write';
import MyPage from './User/MyPage';
import Calendar from './Main/Calendar';
import SigninFinal from './User/SigninFinal';
import Logout from './User/Logout';
import FindEmail from './User/FindEmail';
// import Profile from "./User/Profile";
import Auth from './User/Auth';
import PostDetail from './Video/PostDetail';
import FindPassword from './User/FindPassword';
import AddCalendar from './Main/AddCalendar';
import View from './View/View';
import Buy from './Pay/Buy';
import Search from './Common/Search';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Main/Home';
import ModifyPost from './Main/ModifyPost';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/write" element={<Write/>}></Route>
          <Route path="/myfeed" element={<MyFeed/>}></Route>
          <Route path="/mypage" element={<MyPage/>}></Route>
          <Route path="/calendar" element={<Calendar/>}></Route>
          <Route path="/calendar/delete" element={<Calendar/>}></Route>
          <Route path="/addCalendar" element={<AddCalendar/>}></Route>
          <Route path="/users/signup" element={<SignupFinal/>}></Route>
          <Route path="/users/signin" element={<SigninFinal/>}></Route>
          <Route path="/users/logout" element={<Logout/>}></Route>
          <Route path="/oauth/kakao" element={<Auth/>}></Route>
          <Route path="/users/findEmail" element={<FindEmail/>}></Route>
          {/* <Route path="/profile"><Profile /></Route> */}
          <Route path="/users/findPassword" element={<FindPassword/>}></Route>
          <Route path="/view/:id" element={<View/>}></Route>
          <Route path="/post/delete/:id" element={<Home/>}></Route>
          <Route path="/post/update/:id" element={<ModifyPost/>}></Route>
          <Route path="/buy" element={<Buy/>}></Route>
          <Route path="/search/:word" element={<Search/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
