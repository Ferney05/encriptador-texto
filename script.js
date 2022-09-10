/* Ids */

const inputText = document.getElementById('input-text');
const fraseMsg = document.getElementById('frase-msg');
const infoText = document.getElementById('info-text');
const errorInvalido = document.getElementById('error-invalid');

const items = document.querySelector('.items');
const li1 = document.querySelector('.li1');
const li2 = document.querySelector('.li2');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const info = document.querySelector('.info');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonCopiar = document.getElementById('button-copy');


const mayusculas = [
    {mayus: 'A'}, {mayus: 'B'}, {mayus: 'C'}, {mayus: 'D'}, {mayus: 'E'}, {mayus: 'F'},
    {mayus: 'G'}, {mayus: 'H'}, {mayus: 'I'}, {mayus: 'J'}, {mayus: 'K'}, {mayus: 'L'},
    {mayus: 'M'}, {mayus: 'N'}, {mayus: 'Ñ'}, {mayus: 'O'}, {mayus: 'P'}, {mayus: 'Q'},
    {mayus: 'R'}, {mayus: 'S'}, {mayus: 'T'}, {mayus: 'U'}, {mayus: 'V'}, {mayus: 'W'},
    {mayus: 'X'}, {mayus: 'Y'}, {mayus: 'Z'}, {mayus: '0'}, {mayus: '1'}, {mayus: '2'},
    {mayus: '3'}, {mayus: '4'}, {mayus: '5'}, {mayus: '6'}, {mayus: '7'}, {mayus: '8'}, 
    {mayus: '9'}, {vacio: " "}, {vacio: 0}
]

inputText.addEventListener('keyup', () => {
    if(mayusculas.find(valor => valor.mayus === inputText.value)) {
        info.style = 'font-weight: bolder';
        info.style.color = '#e40000';

        fraseMsg.style.display = 'none';
        errorInvalido.innerText = 'Has ingresado un valor inválido';
        errorInvalido.style = 'font-weight: bolder';
        errorInvalido.style.color = '#e40000';

        buttonOne.style = 'cursor: not-allowed; color: white; background-color: rgb(229, 229, 229) !important; pointer-events: none';
        buttonTwo.style = 'cursor: not-allowed; color: white; background-color: rgb(229, 229, 229) !important; pointer-events: none';
        buttonCopiar.style = 'cursor: not-allowed; color: white; background-color: rgb(229, 229, 229) !important; pointer-events: none';
    } else if(mayusculas.find(valor => valor.vacio === inputText.value.length)){
        info.style = 'font-weight: none';
        info.style.color = 'black';
        fraseMsg.style.display = 'block';
        errorInvalido.style.display = 'none';

        buttonOne.style = 'cursor: pointer; color: #01AF4B; background-color: #4e4e4e34; pointer-events: block';
        buttonTwo.style = 'cursor: pointer; color: #01AF4B; background-color: #4e4e4e34; pointer-events: block';
        buttonCopiar.style = 'cursor: pointer; color: #01AF4B; background-color: #4e4e4e34; pointer-events: block';
    }
})

inputText.addEventListener('keyup', () => {
    if(inputText.value.length == 0) {
        fraseMsg.style.display = "block";
        fraseMsg.innerText = 'Ningun mensaje fue encontrado';
        infoText.innerText = 'Ingresa el texto que desees encriptar o desencriptar';
        
    }else if (inputText.value.length >= 1) {
        fraseMsg.innerText = 'Puedes encriptar o desencriptar tu mensaje';
        infoText.innerText = inputText.value;
    }
})

buttonOne.onclick = () => {
    const ResultadoN = inputText.value;
    Encriptar(ResultadoN);

    buttonOne.style.backgroundColor = '#01AF4B';
    buttonOne.style.border = '1px solid #01AF4B';
    buttonOne.style.color = 'white';
}

buttonTwo.onclick = () => {
    const ResultadoN = inputText.value;
    Desencriptar(ResultadoN);

    buttonTwo.style.backgroundColor = '#01AF4B';
    buttonTwo.style.border = '1px solid #01AF4B';
    buttonTwo.style.color = 'white';
}

buttonCopiar.onclick = () => {
    var input = document.createElement('input');
    input.setAttribute('value', infoText.innerText);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    buttonCopiar.style.backgroundColor = '#01AF4B';
    buttonCopiar.style.border = '1px solid #01AF4B';
    buttonCopiar.style.color = 'white';

    botonOne();
    botonTwo();
}



    const Encriptar = (ResultadoN) => {
    let DesencriptarKeys = ["e", "i", "a", "o", "u"];
    let EncriptarKeys = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    for (i = 0; i < EncriptarKeys.length; i++) {
        ResultadoN = ResultadoN.replace(DesencriptarKeys[i], EncriptarKeys[i]);
    }

    fraseMsg.innerText = 'Yeah! Tu mensaje ha sido encriptado:';
    infoText.innerText = ResultadoN;
    stylesBotonCopiar();
    botonTwo();
}

function Desencriptar(ResultadoN) {
    let EncriptarKeys = ["enter", "imes", "ai", "ober", "ufat"];
    let DesencriptarKeys = ['e', 'i', 'a', 'o', 'u'];

    for (i = 0; i < EncriptarKeys.length; i++) {
        ResultadoN = ResultadoN.replace(EncriptarKeys[i], DesencriptarKeys[i]);
    }

    fraseMsg.innerText = 'Yeah! Tu texto ha sido desencriptado:';
    infoText.innerText = ResultadoN;
    stylesBotonCopiar();
    botonOne();
}


function stylesBotonCopiar() {
    buttonCopiar.style.display = 'block';
    buttonCopiar.style.backgroundColor = '#4e4e4e34';
    buttonCopiar.style.color = '#01AF4B';
    buttonCopiar.style.border = '1px solid #01AF4B';
}

function botonOne() {
    buttonOne.style.display = 'block';
    buttonOne.style.backgroundColor = '#4e4e4e34';
    buttonOne.style.color = '#01AF4B';
    buttonOne.style.border = '1px solid #01AF4B';
}

function botonTwo() {
    buttonTwo.style.display = 'block';
    buttonTwo.style.backgroundColor = '#4e4e4e34';
    buttonTwo.style.color = '#01AF4B';
    buttonTwo.style.border = '1px solid #01AF4B';
}






