import { useTheme } from "../hooks/useTheme";

import "../css/header.css";
import "../css/themes.css";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="header_container">
      <h1>calc</h1>
      <article className="themes">
        <h3>theme</h3>
        <div className="buttons_slider">
          <ol>
            <button
              className={theme === "theme-default" ? "active" : ""}
              onClick={() => setTheme("theme-default")}
            >
              1
            </button>
            <button
              className={theme === "theme-light" ? "active" : ""}
              onClick={() => setTheme("theme-light")}
            >
              2
            </button>
            <button
              className={theme === "theme-violet" ? "active" : ""}
              onClick={() => setTheme("theme-violet")}
            >
              3
            </button>
          </ol>
          <div className="slider">
            <span
              style={{
                transform:
                  theme === "theme-default"
                    ? "translateX(-1.3rem)"
                    : theme === "theme-light"
                    ? "translateX(0)"
                    : "translateX(1.3rem)",
              }}
            ></span>
          </div>
        </div>
      </article>
    </section>
  );
};
