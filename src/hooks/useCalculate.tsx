import { useState } from "react";

export const useCalculate = () => {
  const [firstDigit, setFirstDigit] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [secondDigit, setSecondDigit] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleInput = (value: string) => {
    operation
      ? setSecondDigit(secondDigit + value)
      : setFirstDigit(firstDigit + value);
  };

  const handleOperation = (op: string) => {
    if (firstDigit && !secondDigit) {
      setOperation(op);
    }
  };

  const handleDot = () => {
    if (operation) {
      if (!secondDigit.includes(".")) {
        setSecondDigit(secondDigit + ".");
      }
    } else {
      if (!firstDigit.includes(".")) {
        setFirstDigit(firstDigit + ".");
      }
    }
  };

  const handleClear = () => {
    setFirstDigit("");
    setSecondDigit("");
    setOperation("");
    setResult(null);
  };

  const handleDelete = () => {
    if (secondDigit) {
      setSecondDigit(secondDigit.slice(0, -1));
    } else if (operation) {
      setOperation("");
    } else if (firstDigit) {
      setFirstDigit(firstDigit.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    if (operation && firstDigit && secondDigit) {
      const firstNum = parseFloat(firstDigit);
      const secondNum = parseFloat(secondDigit);
      let total;
      switch (operation) {
        case "+":
          total = firstNum + secondNum;
          break;
        case "-":
          total = firstNum - secondNum;
          break;
        case "x":
          total = firstNum * secondNum;
          break;
        case "/":
          total = firstNum / secondNum;
          break;
        default:
          return;
      }
      const fixedTotal = parseFloat(total.toFixed(2));
      setResult(fixedTotal);
      setFirstDigit(fixedTotal.toString());
      setSecondDigit("");
      setOperation("");
    }
  };

  return {
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
  };
};
