import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-3 w-6 cursor-pointer items-center rounded-full bg-gray-200  transition-colors dark:bg-gray-700 p-1"
    >
      <div
        className={`absolute size-[11px] rounded-full bg-white shadow-md transition-all dark:bg-[#1E2738] ${
          theme === "dark" ? "translate-x-[0.5rem]" : "-translate-x-1"
        }`}
      />
      <Sun
        className="absolute left-[0.6px] size-[8.7px]"
        stroke={theme === "dark" ? "white" : "black"}
      />
      <Moon
        className="absolute right-[1px] size-[8.7px]"
        stroke={theme === "dark" ? "white" : "black"}
      />
    </div>
  );
}
