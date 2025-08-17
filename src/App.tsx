import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/ThemeContext';

import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./pages/ResumePage/ResumePage";

import './global/css/reset.css';
import './global/css/variables.css';
import './global/css/globalLayout.css';

function App() {

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </ThemeProvider>
)
}

export default App
