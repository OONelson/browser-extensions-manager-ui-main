import { useDarkMode } from "@/hooks/useDarkMode";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div
      className="bg-neutral-200 hover:bg-neutral-300 p-4 rounded-xl dark:bg-gray-600"
      role="button"
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      {!isDarkMode ? (
        <img alt="icon-moon" src="./images/icon-moon.svg" />
      ) : (
        <img alt="icon-sun" src="./images/icon-sun.svg" />
      )}
    </div>
  );
};
