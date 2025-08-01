
import { ReactNode } from 'react';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};

const ColorfulLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="pt-20 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-pink-100 min-h-screen">
        {children}
      </main>
    </>
  );
};

export default ColorfulLayout;

