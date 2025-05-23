import ThemeToggle from "@/components/ThemeToggle";
import { useDarkMode } from "@/hooks/useDarkMode";
import LogoDark from "@/icons/LogoDark";

const Header: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <header className="bg-neutral-50 flex justify-between items-center px-3 py-2 rounded-lg shadow-md dark:bg-gray-800">
      {isDarkMode ? <LogoDark /> : <img alt="logo" src="/images/logo.svg" />}
      <ThemeToggle />
    </header>
  );
};

export default Header;
