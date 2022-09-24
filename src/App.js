
import Home from './components/Home';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateDemande from './components/CreateDemande';
import Form from './components/Form';
import First from './components/First';
import  Second  from './components/Second';
import Third from './components/Third';


function App() {
  return (
    <div>
      <Routes>
<Route exact path="/" element={<Home/>}></Route>
<Route exact path="/home" element={<Home/>}></Route>
<Route exact path="/register" element={<Register/>}></Route>
<Route exact path="/login" element={<Login/>}></Route>
<Route exact path="/user/dashboard" element={<Dashboard/>}></Route>
<Route exact path="/demande" element ={<CreateDemande/>}></Route>
<Route exact path="/forms" element ={<Form/>}></Route>
<Route exact path="/first" element ={<First/>}></Route>
{/*<Route exact path="/second" element ={<Second/>}></Route>*/}

<Route exact path="/second" element ={<Second/>}></Route>
<Route exact path="/third" element ={<Third/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
