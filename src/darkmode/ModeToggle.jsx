import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";



export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const initial = isSmallScreen
    ? { y: -100, opacity: 0 }
    : { x: -100, opacity: 0 };

  return (
    <motion.div
    initial={initial}
    animate={{ x: 0, y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
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
    </motion.div>
  );
}
