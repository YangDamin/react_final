
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './Main/Main';
import SignupFinal from './User/SignupFinal';
import MyFeed from './Main/MyFeed';
import Write from './Main/Write';
import Like from './Main/Like';
import MyPage from './User/MyPage';
import Calendar from './Main/Calendar';
import SigninFinal from './User/SigninFinal';
import Logout from './User/Logout';
import FindEmail from './User/FindEmail';
// import Profile from "./User/Profile";
import Auth from './User/Auth';
import PostDetail from './Video/PostDetail';
import BoardDetail from './Video/PostDetail';
import FindPassword from './User/FindPassword';
import AddCalendar from './Main/AddCalendar';
import View from './View/View';
import Buy from './Pay/Buy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/myfeed" element={<MyFeed />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/calendar/delete" element={<Calendar />}></Route>
          <Route path="/addCalendar" element={<AddCalendar/>}></Route>
          <Route path="/users/signup" element={<SignupFinal />}></Route>
          <Route path="/users/signin" element={<SigninFinal />}></Route>
          <Route path="/users/logout" element={<Logout />}></Route>
          <Route path="/oauth/kakao" element={<Auth />}></Route>
          <Route path="/users/findEmail" element={<FindEmail />}></Route>
          <Route path="/post/detail/:postid" element={<PostDetail />}></Route>
          {/* <Route path="/profile"><Profile /></Route> */}
          <Route path="/users/findPassword" element={<FindPassword />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
