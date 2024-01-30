import './App.css';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit" element={<EditTask />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
