// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplication");
const multiplicationTitle = document.querySelector("#multiplicaion-title span");
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Função

const createTable = (numberInput, multiplicationInput) => {
  // Limpando o campo multiplication-operations
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicationInput; i++) {
    const result = numberInput * i;

    // Criando o codigo html do template como uma string
    const template = `
    <div class="row">
    <div class="operation">${numberInput} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`;

    // Transforma uma string em html
    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = numberInput;
};

// Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  // Validando se o usuario preencheu os dois numeros
  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
