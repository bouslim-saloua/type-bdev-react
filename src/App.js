
import Home from './components/Home';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route exact path="/home" element={<Home/>}></Route>
<Route exact path="/register" element={<Register/>}></Route>
<Route exact path="/login" element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
