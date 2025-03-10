import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./pages/ResumePage/ResumePage";


import './global/css/reset.css';
import './global/css/variables.css';
import './global/css/globalLayout.css';
// import reactLogo from './assets/react.svg'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  )
}

export default App
