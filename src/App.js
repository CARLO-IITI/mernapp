
import './App.css';
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>   {/* //we will use react router dom so that on clicking home button we can go to home page */}
      <div>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path = '/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
