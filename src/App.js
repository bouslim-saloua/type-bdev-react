
import Home from './components/Home';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route exact path="/register" element={<Register/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
