import './App.css';
import Concert from './pages/Concert';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js'
import ConsertAbout from './pages/ConsertAbout.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Additional com/ScroolToTop.jsx'

function App() {
  return (
    <>
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/concert" element={<Concert />} />
            <Route path="/consert-about" element={<ConsertAbout />} />


          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;
