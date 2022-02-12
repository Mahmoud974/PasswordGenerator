import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const passwordGenerator = document.querySelector(".passwordGenerator");
    const btnGenerate = document.querySelector(".btn ");
    const inputCheckbox = document.querySelectorAll('input[type="checkbox"]');
    const boxBlack = document.querySelectorAll(".boxBlack");
    //Selection Input
    let valueInput;
    const check = document.querySelectorAll(".check");
    check.forEach(myCheck => {
      myCheck.addEventListener("input", e => {
        console.log(e.target.id);
        if (e.target.id === "number")
          document.body.style.setProperty("--color", "red");
        // switch (e.target.id) {
        //   case "number":
        //     boxBlack.style.setProperty("--color", "red");
        //     break;
        //   case "symbols":
        //     document.body.style.setProperty("--color", "blue");
        //     break;
        //   case "lowercase":
        //     document.body.style.setProperty("--color", "green");
        //     break;
        //   case "uppercase":
        //     document.body.style.setProperty("--color", "black");
        //     break;

        //   default:
        //     break;
        // }

        // document.body.style.setProperty("--color", "red");
      });
    });

    let displayInput = document.querySelector(".inputDisplay");
    let formInput = document.querySelector(".form-label");
    const rangeInput = document.querySelector(".form-range");
    const uppercaseSelector = document.querySelector("#uppercase");
    const lowercaseSelector = document.querySelector("#lowercase");
    const symbolsSelector = document.querySelector("#symbols");
    const numbersSelector = document.querySelector("#number");
    //La data
    const uppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    const lowercase = "azertyuiopqsdfghjklmwxcvbn";
    const symbols = "&é'(§è!çà)-“‘{«¡Çø}—€@Ù÷≠…";
    const numbers = "1234567890";
    //Majuscule
    let stringPass = "Password Generator";
    passwordGenerator.textContent = stringPass.toLocaleUpperCase();

    document.body.style.setProperty("--color", "#2a2c31");

    btnGenerate.addEventListener("click", e => {
      if (uppercaseSelector.checked) {
        data.push(...uppercase);
      }
      if (lowercaseSelector.checked) data.push(...lowercase);
      if (symbolsSelector.checked) data.push(...symbols);
      if (numbersSelector.checked) data.push(...numbers);
      console.log(rangeInput.value);

      for (let i = 0; i < rangeInput.value; i++) {
        if (data.length === 0) {
          return alert("Obligation cohe");
        }
        displayInput.value += data[Math.floor(Math.random() * data.length)];
        console.log(data[Math.floor(Math.random() * data.length)]);
        setTimeout(() => {
          displayInput.value = "";
        }, 5000);
      }
    });

    rangeInput.addEventListener("input", e => {
      valueInput = e.target.value;
      formInput.textContent = valueInput;
      console.log(e.target.value);
    });
  });

  return (
    <>
      <div className="myBox position-absolute top-50 start-50 translate-middle ">
        <h1 className="passwordGenerator"></h1>
        <input
          type="text"
          value=""
          className="inputDisplay fw-bolder display-6 text-light"
          readOnly
        />
        <div>
          <input
            type="range"
            className="form-range w-50"
            min="2"
            max="12"
            id="customRange1"
          />
          <label
            htmlFor="customRange1"
            className="form-label fw-bolder display-6 mx-3"
          >
            12
          </label>
        </div>
        <div className="choose text-uppercase fw-bolder">
          <div className="boxBlack my-2 ">
            <label htmlFor="uppercase" className="fw-bolder">
              Majuscule
              <input
                type="checkbox"
                name=""
                className="check mx-2"
                id="uppercase"
              ></input>
            </label>
          </div>
          <div className="boxBlack my-2 ">
            <label htmlFor="lowercase" className="fw-bolder ">
              Minuscule
              <input
                type="checkbox"
                name=""
                id="lowercase"
                className=" check fw-bolder mx-2"
              ></input>
            </label>
          </div>
          <div className="boxBlack my-2 ">
            <label htmlFor="symbols" className="fw-bolder">
              Symbols
              <input
                type="checkbox"
                name=""
                className="check mx-2"
                id="symbols"
              ></input>
            </label>
          </div>
          <div className="boxBlack my-2 ">
            <label htmlFor="number" className="fw-bolder">
              NUMBER
              <input
                type="checkbox"
                className="check mx-2"
                name=""
                id="number"
              ></input>
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-danger w-25 text-center fw-bolder "
        >
          Generate Password
        </button>
      </div>
    </>
  );
};

export default App;
