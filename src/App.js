
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
import FindPassword from './User/FindPassword';

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
          <Route path="/users/findEmail" element={<FindEmail />}></Route>
          <Route path="/users/findPassword" element={<FindPassword />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
