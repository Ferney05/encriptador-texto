
/* Ids */

const inputText = document.getElementById('input-text');
const fraseMsg = document.getElementById('frase-msg');
const infoText = document.getElementById('info-text');
const errorInvalido = document.getElementById('error-invalid');

const info = document.querySelector('.info');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonCopiar = document.getElementById('button-copy');

const resultEncriptadoDesencriptado = document.querySelector('.result-encriptado-desencriptado');
const infoContent = document.querySelector('.info-content');


const alfaNumsLetters = [
    {mayusNums: 'A'}, {mayusNums: 'B'}, {mayusNums: 'C'}, {mayusNums: 'D'}, {mayusNums: 'E'}, {mayusNums: 'F'},
    {mayusNums: 'G'}, {mayusNums: 'H'}, {mayusNums: 'I'}, {mayusNums: 'J'}, {mayusNums: 'K'}, {mayusNums: 'L'},
    {mayusNums: 'M'}, {mayusNums: 'N'}, {mayusNums: 'Ñ'}, {mayusNums: 'O'}, {mayusNums: 'P'}, {mayusNums: 'Q'},
    {mayusNums: 'R'}, {mayusNums: 'S'}, {mayusNums: 'T'}, {mayusNums: 'U'}, {mayusNums: 'V'}, {mayusNums: 'W'},
    {mayusNums: 'X'}, {mayusNums: 'Y'}, {mayusNums: 'Z'}, {mayusNums: 'Á'}, {mayusNums: 'É'}, {mayusNums: 'Í'},
    {mayusNums: 'Ó'}, {mayusNums: 'Ú'}, {mayusNums: 'á'}, {mayusNums: 'é'}, {mayusNums: 'í'}, {mayusNums: 'ó'},
    {mayusNums: 'ú'}, {mayusNums: '0'}, {mayusNums: '1'}, {mayusNums: '2'}, {mayusNums: '3'}, {mayusNums: '4'}, 
    {mayusNums: '5'}, {mayusNums: '6'}, {mayusNums: '7'}, {mayusNums: '8'}, {mayusNums: '9'}, {vacio: " "}, {vacio: 0}
]

inputText.addEventListener('keyup', () => {
    if(alfaNumsLetters.find(valor => valor.mayusNums === inputText.value)) {
        info.style = 'font-weight: bold'
        info.style.color = 'red'

        fraseMsg.style.display = 'none';
        errorInvalido.innerText = 'Has ingresado un valor inválido';
        errorInvalido.style = 'font-weight: bold';
        errorInvalido.style.color = 'red';

        buttonOne.style = 'cursor: not-allowed; color: white; background-color: rgb(229, 229, 229) !important; pointer-events: none';
        buttonTwo.style = 'cursor: not-allowed; color: white; background-color: rgb(229, 229, 229) !important; pointer-events: none';
        buttonCopiar.style = 'cursor: not-allowed; color: white; background-color: rgb(229, 229, 229) !important; pointer-events: none';
    } else if(alfaNumsLetters.find(valor => valor.vacio === inputText.value.length)){
        info.style = 'font-weight: none';
        info.style.color = 'white';
        fraseMsg.style.display = 'block';
        errorInvalido.style.display = 'none';

        buttonOne.style = 'cursor: pointer; color: #01AF4B; background-color: white; pointer-events: block';
        buttonTwo.style = 'cursor: pointer; color: #01AF4B; background-color: white; pointer-events: block';
        buttonCopiar.style = 'cursor: pointer; color: #01AF4B; background-color: white; pointer-events: block';

        resultEncriptadoDesencriptado.style = 'position: fixed; margin-top: 14em; margin-left: 8em';
    }
})

inputText.addEventListener('keyup', () => {
    if(inputText.value.length == 0) {
        fraseMsg.style.display = "block";
        fraseMsg.innerText = 'Ningun mensaje fue encontrado';
        infoText.innerText = 'Ingresa el texto que desees encriptar o desencriptar';
        resultEncriptadoDesencriptado.style = 'margin-left: 1em';
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
    buttonCopiar.style.backgroundColor = 'white';
    buttonCopiar.style.color = '#01AF4B';
    buttonCopiar.style.border = '2px solid #01AF4B';
}

function botonOne() {
    buttonOne.style.display = 'block';
    buttonOne.style.backgroundColor = 'white';
    buttonOne.style.color = '#01AF4B';
    buttonOne.style.border = '2px solid #01AF4B';
}

function botonTwo() {
    buttonTwo.style.display = 'block';
    buttonTwo.style.backgroundColor = 'white';
    buttonTwo.style.color = '#01AF4B';
    buttonTwo.style.border = '2px solid #01AF4B';
}






