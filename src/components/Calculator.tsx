import { useCalculate } from "../hooks/useCalculate";
import { Screen } from "./Screen";

import "../css/calculator.css";

export const Calculator = () => {
  const {
    firstDigit,
    operation,
    secondDigit,
    result,
    handleInput,
    handleOperation,
    handleDot,
    handleClear,
    handleDelete,
    handleCalculate,
  } = useCalculate();

  return (
    <main className="calc_container">
      <Screen
        firstDigit={firstDigit}
        operation={operation}
        secondDigit={secondDigit}
        result={result}
      />
      <section className="grid_container">
        <button className="key" onClick={() => handleInput("7")}>
          7
        </button>
        <button className="key" onClick={() => handleInput("8")}>
          8
        </button>
        <button className="key" onClick={() => handleInput("9")}>
          9
        </button>
        <button className="key key-delete" onClick={handleDelete}>
          DEL
        </button>

        <button className="key" onClick={() => handleInput("4")}>
          4
        </button>
        <button className="key" onClick={() => handleInput("5")}>
          5
        </button>
        <button className="key" onClick={() => handleInput("6")}>
          6
        </button>
        <button className="key" onClick={() => handleOperation("+")}>
          +
        </button>

        <button className="key" onClick={() => handleInput("1")}>
          1
        </button>
        <button className="key" onClick={() => handleInput("2")}>
          2
        </button>
        <button className="key" onClick={() => handleInput("3")}>
          3
        </button>
        <button className="key" onClick={() => handleOperation("-")}>
          -
        </button>

        <button className="key" onClick={handleDot}>
          .
        </button>
        <button className="key" onClick={() => handleInput("0")}>
          0
        </button>
        <button className="key" onClick={() => handleOperation("÷")}>
          ÷
        </button>
        <button className="key" onClick={() => handleOperation("x")}>
          x
        </button>

        <button className="key key-reset" onClick={handleClear}>
          RESET
        </button>
        <button className="key key-equal" onClick={handleCalculate}>
          =
        </button>
      </section>
    </main>
  );
};
