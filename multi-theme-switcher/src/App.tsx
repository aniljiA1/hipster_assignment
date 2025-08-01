import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DefaultLayout from './layouts/DefaultLayout';
import DarkLayout from './layouts/DarkLayout';
import ColorfulLayout from './layouts/ColorfulLayout';
import './styles/themes.css';

function ThemedRoutes() {
  const { theme } = useContext(ThemeContext);
  const Layout =
    theme === 'theme2' ? DarkLayout : theme === 'theme3' ? ColorfulLayout : DefaultLayout;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text font-theme transition-all duration-300">
        <ThemedRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
