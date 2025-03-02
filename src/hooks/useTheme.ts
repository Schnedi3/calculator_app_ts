import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("theme-default");

  useEffect(() => {
    document.body.className = theme;

    return () => {
      document.body.className = "";
    };
  }, [theme]);

  return { theme, setTheme };
};
