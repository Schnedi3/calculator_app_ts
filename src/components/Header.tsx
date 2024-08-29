import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

import "../css/header.css";
import "../css/themes.css";

export const Header = () => {
  const { currentTheme, setCurrentTheme } = useThemeSwitcher();

  return (
    <section className="header_container">
      <h1>calc</h1>
      <article className="themes_container">
        <h3>theme</h3>
        <div className="slider_container">
          <div className="labels">
            <label htmlFor="default">1</label>
            <label htmlFor="light">2</label>
            <label htmlFor="violet">3</label>
          </div>
          <input
            type="radio"
            id="default"
            checked={currentTheme === "default"}
            onChange={() => setCurrentTheme("default")}
          />
          <input
            type="radio"
            id="light"
            checked={currentTheme === "light"}
            onChange={() => setCurrentTheme("light")}
          />
          <input
            type="radio"
            id="violet"
            checked={currentTheme === "violet"}
            onChange={() => setCurrentTheme("violet")}
          />
          <div className="slider"></div>
        </div>
      </article>
    </section>
  );
};
