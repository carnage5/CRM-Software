import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './login';
import Home from './home';
import Menu from './menu';
import Datavisual from './dashboard';
import CustomerData from './accounts';
import Report from './report';
import Queries from './queries';
import Refund from './refund';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='visual' element={<Datavisual/>}/>
        <Route path='data' element={<CustomerData/>}/>
        <Route path='report' element={<Report/>}/>
        <Route path='queries' element={<Queries/>}/>
        <Route path='refund' element={<Refund/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
