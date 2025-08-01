import { ReactNode } from 'react';
import Header from '../components/Header';

const DarkLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen pt-20">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
          <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
          <ul className="space-y-2">
            <li>🏠 Home</li>
            <li>📖 About</li>
            <li>✉️ Contact</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 bg-gray-800 text-white">
          {children}
        </main>
      </div>
    </>
  );
};

export default DarkLayout;
