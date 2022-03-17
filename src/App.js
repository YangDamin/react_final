
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/myfeed" element={<MyFeed />}></Route>
          <Route path="/like" element={<Like />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/users/signup" element={<SignupFinal />}></Route>
          <Route path="/users/signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
