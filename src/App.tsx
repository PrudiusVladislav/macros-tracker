import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import MacrosCalculator from './pages/MacrosCalculator'
import BodyFatCalculator from './pages/BodyFatCalculator'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(){
  return (
    <div className="flex">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/macros-calc" element={<MacrosCalculator />}/>
          <Route path="/body-fat-calc" element={<BodyFatCalculator />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
