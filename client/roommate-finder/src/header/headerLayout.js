import Header from './Header';

function HeaderLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default HeaderLayout;