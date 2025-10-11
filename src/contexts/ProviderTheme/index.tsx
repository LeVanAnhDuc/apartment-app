// libs
import React, { createContext } from "react";
import { useState, useEffect } from "react";
// types
import type { PropsWithChildren } from "react";

type Theme = "light" | "dark";

const useThemeProvide = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(initialTheme);
    setIsLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return {
    theme,
    toggleTheme,
    isLoading
  };
};

export const ThemeContext = createContext<ReturnType<typeof useThemeProvide>>({
  isLoading: true,
  theme: "light",
  toggleTheme: () => {}
});

const ProviderTheme = ({ children }: PropsWithChildren) => {
  const value = useThemeProvide();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ProviderTheme;
