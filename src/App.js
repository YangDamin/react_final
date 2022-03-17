
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './User/Signin';
import './App.css';
import Main from './Main/Main';
import SignupFinal from './User/SignupFinal';
import Header from './Common/Header';
import Nav from './Common/Nav';
import Body from './Main/Body';
import Footer from './Common/Footer';
import MyFeed from './Main/MyFeed';
import Like from './Main/Like';
import MyPage from './Main/MyPage';
import Calendar from './Main/Calendar';
import SigninFinal from './User/SigninFinal';
import Logout from './User/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main />}></Route>
          <Route path="/myfeed" element={<MyFeed />}></Route>
          <Route path="/like" element={<Like />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/users/signup" element={<SignupFinal />}></Route>
          <Route path="/users/signin" element={<SigninFinal />}></Route>
          <Route path="/users/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
