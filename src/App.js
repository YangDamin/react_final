
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './User/Signin';
import './App.css';
import Main from './Main/Main';
import SignupFinal from './User/SignupFinal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main></Main>}></Route> */}
          <Route path="/" element={<Main/>}></Route>
          <Route path="/users/signup" element={<SignupFinal/>}></Route>
          <Route path="/users/signin" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
