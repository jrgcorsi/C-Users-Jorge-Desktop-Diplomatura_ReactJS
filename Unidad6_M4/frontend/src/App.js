import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import ProyectosPage from './pages/ProyectosPage';
import Navbar from './components/layout/Navbar';
import NosotrosPage from './pages/NosotrosPage';
import Footer from './components/layout/Footer';
import NoticiasPage from './pages/NoticiasPage';


import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="nosotros" element={<NosotrosPage />} />
            <Route path="proyectos" element={<ProyectosPage />} />
            <Route path="noticias" element={<NoticiasPage />} />
            <Route path="contacto" element={<ContactoPage />} />
        </Routes>
    <Footer/>
    </div>
  )
}
export default App

















/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div>
 */
