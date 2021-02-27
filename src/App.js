import React, { useState } from "react";
import ConvertInput from "./components/ConvertInput";
import { RomanNumerals } from "./utils/helper";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [numErrorMessage, setNumErrorMessage] = useState("");
  const [fromRomanResults, setFromRomanResults] = useState("");
  const [toRomanResults, setToRomanResults] = useState("");

  const onChangeToRoman = (e) => {
    const num = e.target.value;
    setNumErrorMessage("");
    setValue(num);
  };

  const convertToRoman = () => {
    if (value === "") {
      setToRomanResults("");
      setNumErrorMessage("Enter Number to convert it to Roman numeral");
      return;
    }

    if (isNaN(value) == true) {
      setToRomanResults("");
      setNumErrorMessage("You entered invalid number");
      return;
    }
    setToRomanResults(RomanNumerals.toRoman(value));
  };

  /* Check if the letter entered is Roman or not */
  const isRoman = (string) => {
    const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/;
    return pattern.test(string);
  };

  const onChangeFromRoman = (e) => {
    const letter = e.target.value.toUpperCase();
    setErrorMessage("");
    setTextValue(letter);
  };

  const converFromRoman = () => {
    if (textValue === "") {
      setToRomanResults("");
      setErrorMessage("Enter Roman Numeral to convert it to number");
      return;
    }
    if (isRoman(textValue) === false) {
      setFromRomanResults("");
      setErrorMessage("Enter a valid Roman Numeral ");
      return;
    }
    setFromRomanResults(RomanNumerals.fromRoman(textValue));
  };

  return (
    <div className="min-w-screen min-h-screen content-center bg-gray-800 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-xl content-center bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x center min-w-80 max-w-3xl"
        x-data="app()"
        x-init="generatePassword()"
      >
        <h1 className=" text-center m-5 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Roman numerals Converter
        </h1>
        <div className="relative mt-1">
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2">
            <div>
              <h2 className="text-center">Convert numbers to Roman numerals</h2>
              <ConvertInput onChange={onChangeToRoman} value={value} />
              <span className="text-sm text-red-500">{numErrorMessage}</span>
              <div className="text-center mt-2">
                <button
                  className="bg-red-400 hover:bg-grey-dark text-white py-2 px-4 rounded shadow"
                  onClick={() =>
                    setValue("") ||
                    setNumErrorMessage("") ||
                    setToRomanResults("")
                  }
                >
                  Cancel{" "}
                </button>
                <button
                  className="bg-green-400 border text-white py-2 px-4 rounded  shadow"
                  onClick={() => convertToRoman()}
                >
                  Convert{" "}
                </button>
              </div>
            </div>
            <div className="bg-white">
              <span className="text-center m-5  text-gray-900 sm:truncate">
                {` Result: ${toRomanResults}`}
              </span>
            </div>
            <div>
              <h2 className="text-center">Convert Roman numerals to numbers</h2>
              <ConvertInput onChange={onChangeFromRoman} value={textValue} />
              <span className="text-sm text-red-500">{errorMessage}</span>
              <div className="text-center mt-2">
                <button
                  className="bg-red-400 hover:bg-grey-dark text-white py-2 px-4 rounded shadow"
                  onClick={() =>
                    setTextValue("") ||
                    setErrorMessage("") ||
                    setFromRomanResults("")
                  }
                >
                  Cancel{" "}
                </button>
                <button
                  className="bg-green-400 border text-white py-2 px-4 rounded  shadow"
                  onClick={() => converFromRoman()}
                >
                  Convert{" "}
                </button>
              </div>
            </div>
            <div className="bg-white">
              <span className="text-center m-5  text-gray-900 sm:truncate">
                {` Result: ${fromRomanResults}`}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className="h-2 bg-blue-500 flex-1"></div>
          <div className="h-2 bg-red-500 flex-1"></div>
          <div className="h-2 bg-yellow-500 flex-1"></div>
          <div className="h-2 bg-blue-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-red-500 flex-1"></div>
        </div>
      </div>
    </div>
  );
}
export default App;
