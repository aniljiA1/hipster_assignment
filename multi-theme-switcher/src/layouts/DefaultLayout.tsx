import Header from '../components/Header';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 max-w-6xl mx-auto">{children}</main>
    </>
  );
};

export default DefaultLayout;
