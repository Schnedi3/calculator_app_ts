import { useState, useEffect } from "react";

export const useThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("default");

  useEffect(() => {
    const themes = ["light", "violet"];
    const previousTheme = themes.find((theme) =>
      document.body.classList.contains(`theme-${theme}`)
    );

    if (previousTheme) {
      document.body.classList.remove(`theme-${previousTheme}`);
    }

    if (currentTheme !== "default") {
      document.body.classList.add(`theme-${currentTheme}`);
    }

    return () => {
      if (currentTheme !== "default") {
        document.body.classList.remove(`theme-${currentTheme}`);
      }
    };
  }, [currentTheme]);

  return { currentTheme, setCurrentTheme };
};
