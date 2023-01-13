import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header";
import LandingPage from "./pages/landing";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
