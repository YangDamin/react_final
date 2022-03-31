
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
<<<<<<< HEAD
import FindEmail from './User/FindEmail';
=======
import Profile from "./User/Profile";
import Auth from './User/Auth';
>>>>>>> dc3d84508052284ae72a00b7698ba87dcca6ad47

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/myfeed" element={<MyFeed />}></Route>
          <Route path="/like" element={<Like />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/users/signup" element={<SignupFinal />}></Route>
          <Route path="/users/signin" element={<SigninFinal />}></Route>
          <Route path="/users/logout" element={<Logout />}></Route>
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/oauth/kakao"element={<Main />}></Route>
=======
          <Route path="/users/findEmail" element={<FindEmail />}></Route>
>>>>>>> 073c33dea0382f7c6c52b72af4abea52f7a19c7e
=======
          <Route path="/oauth/kakao"><Auth /></Route>
          <Route path="/profile"><Profile /></Route>
>>>>>>> dc3d84508052284ae72a00b7698ba87dcca6ad47
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
