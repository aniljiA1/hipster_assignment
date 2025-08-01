import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-black text-white shadow-md z-50 px-6 flex items-center justify-between">
      <div className="text-xl font-bold">🌐 MyApp</div>

      <nav className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="bg-white text-black p-2 rounded"
        >
          <option value="theme1">Minimalist</option>
          <option value="theme2">Dark Sidebar</option>
          <option value="theme3">Colorful Grid</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
