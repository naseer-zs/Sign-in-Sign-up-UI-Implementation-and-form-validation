import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Welcome from './components/Welcome';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/welcome" element={<Welcome/>} />        
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
