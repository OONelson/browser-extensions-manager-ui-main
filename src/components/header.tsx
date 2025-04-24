const Header: React.FC = () => {
  return (
    <header className="bg-neutral-50 flex justify-between items-center px-3 py-2 rounded-lg shadow-md">
      <img alt="logo-icon" src="/assets/images/logo.svg" />
      <div className="bg-neutral-200 p-4 rounded-xl">
        <img alt="icon-moon" src="/assets/images/icon-moon.svg" />
      </div>
    </header>
  );
};

export default Header;
