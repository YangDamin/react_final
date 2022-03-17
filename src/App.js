
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './User/Signin';
import './App.css';
import Main from './Main/Main';
import SignupFinal from './User/SignupFinal';
import SigninFinal from './User/SigninFinal';
import Logout from './User/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main/>}></Route>
          <Route path="/users/signup" element={<SignupFinal/>}></Route>
          <Route path="/users/signin" element={<SigninFinal/>}></Route>
          <Route path="/users/logout" element={<Logout/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
