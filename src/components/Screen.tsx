import "../css/screen.css";

interface ScreenProps {
  firstDigit: string;
  operation: string;
  secondDigit: string;
  result: number | null;
}

export const Screen = ({
  firstDigit,
  operation,
  secondDigit,
  result,
}: ScreenProps) => {
  const operationValue =
    firstDigit || operation || secondDigit
      ? `${firstDigit} ${operation} ${secondDigit}`
      : "";

  return (
    <section className="screen">
      <input
        className="operation"
        placeholder="0"
        value={operationValue}
        readOnly
      />
      <input className="result" placeholder="0" value={result || ""} readOnly />
    </section>
  );
};
