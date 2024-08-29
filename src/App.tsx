import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";

import "./css/app.css";

export const App = () => {
  return (
    <main className="app container">
      <Header />
      <Calculator />
    </main>
  );
};
