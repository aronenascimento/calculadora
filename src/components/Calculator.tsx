import { useState } from "react";
import { motion } from "framer-motion";

type Operator = "+" | "-" | "×" | "÷" | null;

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === "-" ? display.slice(1) : "-" + display);
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const performOperation = (nextOperator: Operator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (left: number, right: number, op: Operator): number => {
    switch (op) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "×":
        return left * right;
      case "÷":
        return right !== 0 ? left / right : 0;
      default:
        return right;
    }
  };

  const handleEquals = () => {
    if (operator && previousValue !== null) {
      const inputValue = parseFloat(display);
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const Button = ({
    children,
    onClick,
    variant = "default",
    span = 1,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    variant?: "default" | "operator" | "function";
    span?: number;
  }) => {
    const variants = {
      default: "bg-calculator-button text-calculator-button-foreground hover:bg-calculator-button-hover",
      operator: "bg-calculator-operator text-calculator-operator-foreground hover:bg-calculator-operator-hover",
      function: "bg-calculator-function text-calculator-function-foreground hover:bg-calculator-function-hover",
    };

    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        onClick={onClick}
        className={`
          ${variants[variant]}
          ${span === 2 ? "col-span-2" : ""}
          h-16 sm:h-20 rounded-2xl text-xl sm:text-2xl font-medium
          transition-colors duration-150 shadow-calculator-button
        `}
      >
        {children}
      </motion.button>
    );
  };

  const formatDisplay = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    if (value.length > 12) {
      return num.toExponential(6);
    }
    return value;
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-calculator rounded-3xl p-4 sm:p-6 shadow-calculator">
        {/* Display */}
        <div className="mb-4 sm:mb-6 text-right px-2">
          <div className="text-calculator-display text-4xl sm:text-5xl font-light tracking-tight min-h-[3rem] overflow-hidden">
            {formatDisplay(display)}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          <Button variant="function" onClick={clear}>AC</Button>
          <Button variant="function" onClick={toggleSign}>±</Button>
          <Button variant="function" onClick={inputPercent}>%</Button>
          <Button variant="operator" onClick={() => performOperation("÷")}>÷</Button>

          <Button onClick={() => inputDigit("7")}>7</Button>
          <Button onClick={() => inputDigit("8")}>8</Button>
          <Button onClick={() => inputDigit("9")}>9</Button>
          <Button variant="operator" onClick={() => performOperation("×")}>×</Button>

          <Button onClick={() => inputDigit("4")}>4</Button>
          <Button onClick={() => inputDigit("5")}>5</Button>
          <Button onClick={() => inputDigit("6")}>6</Button>
          <Button variant="operator" onClick={() => performOperation("-")}>−</Button>

          <Button onClick={() => inputDigit("1")}>1</Button>
          <Button onClick={() => inputDigit("2")}>2</Button>
          <Button onClick={() => inputDigit("3")}>3</Button>
          <Button variant="operator" onClick={() => performOperation("+")}>+</Button>

          <Button onClick={() => inputDigit("0")} span={2}>0</Button>
          <Button onClick={inputDecimal}>,</Button>
          <Button variant="operator" onClick={handleEquals}>=</Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
