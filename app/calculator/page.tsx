"use client";

import { useCallback, useEffect, useState } from "react";

type Operator = "+" | "-" | "×" | "÷";
type ButtonAction =
  | "memory-clear"
  | "memory-recall"
  | "memory-add"
  | "memory-subtract"
  | "clear-entry"
  | "digit"
  | "decimal"
  | "operator"
  | "percent"
  | "equals";

type CalculatorButton = {
  label: string;
  action: ButtonAction;
  value?: string;
};

const BUTTON_ROWS: CalculatorButton[][] = [
  [
    { label: "MC", action: "memory-clear" },
    { label: "MR", action: "memory-recall" },
    { label: "M+", action: "memory-add" },
    { label: "M−", action: "memory-subtract" },
    { label: "CE", action: "clear-entry" },
  ],
  [
    { label: "7", action: "digit", value: "7" },
    { label: "8", action: "digit", value: "8" },
    { label: "9", action: "digit", value: "9" },
    { label: "÷", action: "operator", value: "÷" },
    { label: "%", action: "percent" },
  ],
  [
    { label: "4", action: "digit", value: "4" },
    { label: "5", action: "digit", value: "5" },
    { label: "6", action: "digit", value: "6" },
    { label: "×", action: "operator", value: "×" },
    { label: "C", action: "clear-entry" },
  ],
  [
    { label: "1", action: "digit", value: "1" },
    { label: "2", action: "digit", value: "2" },
    { label: "3", action: "digit", value: "3" },
    { label: "−", action: "operator", value: "-" },
    { label: "⌫", action: "clear-entry" },
  ],
  [
    { label: "0", action: "digit", value: "0" },
    { label: ".", action: "decimal" },
    { label: "=", action: "equals" },
    { label: "+", action: "operator", value: "+" },
    { label: "±", action: "percent" },
  ],
];

function calculate(left: number, right: number, operator: Operator): number {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "×":
      return left * right;
    case "÷":
      return right === 0 ? Number.NaN : left / right;
  }
}

function formatResult(value: number): string {
  if (!Number.isFinite(value)) return "Error";
  return String(Number(value.toPrecision(10)));
}

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);

  const clearAll = useCallback(() => {
    setDisplay("0");
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  }, []);

  const clearEntry = useCallback(() => {
    setDisplay("0");
    setWaitingForOperand(false);
  }, []);

  const inputDigit = useCallback(
    (digit: string) => {
      setDisplay((current) => {
        if (waitingForOperand || current === "Error") return digit;
        if (current.replace("-", "").replace(".", "").length >= 12) {
          return current;
        }
        return current === "0" ? digit : `${current}${digit}`;
      });
      setWaitingForOperand(false);
    },
    [waitingForOperand]
  );

  const inputDecimal = useCallback(() => {
    setDisplay((current) => {
      if (waitingForOperand || current === "Error") return "0.";
      return current.includes(".") ? current : `${current}.`;
    });
    setWaitingForOperand(false);
  }, [waitingForOperand]);

  const chooseOperator = useCallback(
    (nextOperator: Operator) => {
      const currentValue = Number(display);
      if (!Number.isFinite(currentValue)) {
        clearAll();
        return;
      }

      if (operator !== null && storedValue !== null && !waitingForOperand) {
        const result = calculate(storedValue, currentValue, operator);
        setDisplay(formatResult(result));
        setStoredValue(result);
      } else {
        setStoredValue(currentValue);
      }
      setOperator(nextOperator);
      setWaitingForOperand(true);
    },
    [clearAll, display, operator, storedValue, waitingForOperand]
  );

  const performEquals = useCallback(() => {
    if (operator === null || storedValue === null) return;
    const rightValue = waitingForOperand ? storedValue : Number(display);
    const result = calculate(storedValue, rightValue, operator);
    setDisplay(formatResult(result));
    setStoredValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }, [display, operator, storedValue, waitingForOperand]);

  const changeSign = useCallback(() => {
    setDisplay((current) => {
      if (current === "0" || current === "Error") return current;
      return current.startsWith("-") ? current.slice(1) : `-${current}`;
    });
  }, []);

  const applyPercent = useCallback(() => {
    setDisplay((current) => formatResult(Number(current) / 100));
    setWaitingForOperand(true);
  }, []);

  const updateMemory = useCallback(
    (action: "clear" | "recall" | "add" | "subtract") => {
      if (action === "clear") {
        setMemory(0);
        return;
      }
      if (action === "recall") {
        setDisplay(formatResult(memory));
        setWaitingForOperand(true);
        return;
      }
      const value = Number(display);
      if (!Number.isFinite(value)) return;
      setMemory((current) =>
        action === "add" ? current + value : current - value
      );
      setWaitingForOperand(true);
    },
    [display, memory]
  );

  const handleButtonPress = (button: CalculatorButton) => {
    switch (button.action) {
      case "digit":
        if (button.value) inputDigit(button.value);
        break;
      case "decimal":
        inputDecimal();
        break;
      case "operator":
        if (button.value) chooseOperator(button.value as Operator);
        break;
      case "equals":
        performEquals();
        break;
      case "percent":
        if (button.label === "±") changeSign();
        else applyPercent();
        break;
      case "clear-entry":
        clearEntry();
        break;
      case "memory-clear":
        updateMemory("clear");
        break;
      case "memory-recall":
        updateMemory("recall");
        break;
      case "memory-add":
        updateMemory("add");
        break;
      case "memory-subtract":
        updateMemory("subtract");
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^[0-9]$/.test(event.key)) inputDigit(event.key);
      else if (event.key === ".") inputDecimal();
      else if (event.key === "Enter" || event.key === "=") performEquals();
      else if (event.key === "+") chooseOperator("+");
      else if (event.key === "-") chooseOperator("-");
      else if (event.key === "*") chooseOperator("×");
      else if (event.key === "/") chooseOperator("÷");
      else if (event.key === "%") applyPercent();
      else if (event.key === "Escape" || event.key.toLowerCase() === "c")
        clearAll();
      else return;
      event.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    applyPercent,
    chooseOperator,
    clearAll,
    inputDecimal,
    inputDigit,
    performEquals,
  ]);

  const formattedDisplay =
    display === "Error"
      ? display
      : display.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <main className="flex justify-center px-4 py-8">
      <section
        className="w-full max-w-[330px] overflow-hidden rounded-2xl border-4 border-black bg-[#858585] shadow-xl"
        aria-label="เครื่องคิดเลข"
      >
        <div className="bg-[#aaa] p-3">
          <div className="mb-2 flex h-16 items-center justify-end overflow-hidden rounded-xl border-2 border-[#888] bg-[#c6fdfa] px-3">
            <output
              className="truncate text-3xl leading-none text-black"
              aria-live="polite"
            >
              {formattedDisplay}
            </output>
          </div>

          <div className="grid gap-1.5">
            {BUTTON_ROWS.map((row, rowIndex) => (
              <div className="grid grid-cols-5 gap-1.5" key={rowIndex}>
                {row.map((button, buttonIndex) => {
                  const isAction =
                    button.action === "operator" || button.action === "equals";
                  return (
                    <button
                      type="button"
                      key={`${rowIndex}-${buttonIndex}`}
                      className={`h-12 rounded-lg border border-[#888] text-lg font-bold text-black transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-black ${
                        isAction ? "bg-[#a9efad]" : "bg-[#f4f4f4]"
                      }`}
                      onClick={() => handleButtonPress(button)}
                    >
                      {button.label}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="px-2 py-1 text-center text-base text-white">
          68083016 ชัยนันท์ ธรรมสา
        </div>
      </section>
    </main>
  );
}
