import React, { useEffect, useState } from "react";
const App = () => {
  useEffect(() => {
    const lowercase = document.querySelector("#lowercase");
    const uppercase = document.querySelector("#uppercase");
    const number = document.querySelector("#number");
    const symbols = document.querySelector("#symbols");
    const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
    const dataUppercase = dataLowerCase.toLocaleUpperCase();
    const dataNumbers = "0123456789";
    const dataSymbols = "#”’[å»ÛÁØ]–‰#±•¿¿∞?≠@*€¥Ôô";
    const rangeValue = document.getElementById("password-length");
    const generateButton = document.querySelector("#generateButton");
    const passwordOutput = document.getElementById("password-output");
    const generatePasseword = () => {
      let data = [];
      let password = "";
      if (lowercase.checked) {
        if (lowercase.checked) data.push(...dataLowerCase);
        if (uppercase.checked) data.push(...dataUppercase);
        if (number.checked) data.push(...dataNumbers);
        if (symbols.checked) data.push(...dataSymbols);

        if (data.length === 0) {
          alert("Veuillez selectionner");
          return;
        }
        console.log(data[Math.floor(Math.random() * data.length)]);

        for (let i = 0; i < rangeValue.value; i++) {
          password += data[Math.floor(Math.random() * data.length)];
        }
        passwordOutput.value = password;
        passwordOutput.select();
        document.execCommand("copy");
      }
    };
    generateButton.addEventListener("click", generatePasseword);
    generateButton.addEventListener("input", generatePasseword);
  });

  return (
    <>
      <div className="app">
        <input
          type="text"
          id="password-output"
          value="Générateur de Mdp"
          readOnly
        />

        <div className="range-container">
          <input type="range" id="password-length" min="4" max="24" value="8" />
          <input
            type="text"
            name=""
            id="display-password-length"
            value="8"
            readOnly
            onInput="document.querySelector('#display-password-length').value=this.value;"
          />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="lowercase" className="checkbox" />
          <label htmlFor="lowercase">a-z</label>

          <input type="checkbox" id="uppercase" className="checkbox" />
          <label htmlFor="uppercase">A-Z</label>

          <input type="checkbox" id="number" className="checkbox" />
          <label htmlFor="number">0-9</label>

          <input type="checkbox" id="symbols" className="checkbox" />
          <label htmlFor="symbols">!-?</label>
        </div>
        <button id="generateButton">Générer mot de passe</button>
      </div>
    </>
  );
};

export default App;
