import { ThemeToggle } from "./themeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-neutral-50 flex justify-between items-center px-3 py-2 rounded-lg shadow-md dark:bg-gray-800">
      <img alt="logo-icon" src="/assets/images/logo.svg" />
      <ThemeToggle />
    </header>
  );
};

export default Header;
