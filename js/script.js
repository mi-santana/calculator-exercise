const addBtn = document.querySelector('#add');
const minusBtn = document.querySelector('#minus');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const h2 = document.querySelector('h2');
const deleteAll = document.querySelector('.delete button');

let result;

function validateNumber() {
    if (!n1.value || !n2.value) {
        alert(`Preencha os dois números!`);
        return false;
    }
    return true;
}

addBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!validateNumber()) {
        return;
    }
    result = n1.valueAsNumber + n2.valueAsNumber;
    h2.textContent = `Resultado: ${result}`;
});

minusBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!validateNumber()) {
        return;
    }
    result = n1.valueAsNumber - n2.valueAsNumber;
    h2.textContent = `Resultado: ${result}`;
});

divideBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!validateNumber()) {
        return;
    }

    if (n2.valueAsNumber !== 0) {
        result = n1.valueAsNumber / n2.valueAsNumber;
        h2.textContent = `Resultado: ${result}`;
    } else {
        alert(`Não é possível dividir por zero!`);
    }
    
});

multiplyBtn.addEventListener('click', (event) => {
    if (!validateNumber()) {
        return;
    }
    result = n1.valueAsNumber * n2.valueAsNumber;
    h2.textContent = `Resultado: ${result}`;
});

deleteAll.addEventListener('click', () => {
    n1.value = '';
    n2.value = '';
    h2.textContent = `Resultado:`
});