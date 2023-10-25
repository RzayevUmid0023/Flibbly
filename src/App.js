import './App.css';
import Concert from './pages/Concert';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/concert" element={<Concert />} />

          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;
