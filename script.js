
/* Ids */

const inputText = document.getElementById('input-text');
const fraseMsg = document.getElementById('frase-msg');
const infoText = document.getElementById('info-text');
const errorInvalido = document.getElementById('error-invalid');

const info = document.querySelector('.info');
const imagen = document.querySelector('.img-advertencia')

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonCopiar = document.getElementById('button-copy');


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
        info.style.color = '#d42929'

        fraseMsg.style.display = 'none';
        errorInvalido.innerText = 'Has ingresado un valor inválido';
        errorInvalido.style = 'font-weight: bold';
        errorInvalido.style.color = '#d42929';

        buttonOne.style = 'cursor: not-allowed; color: #d42929; background-color: rgb(229, 229, 229) !important; pointer-events: none';
        buttonTwo.style = 'cursor: not-allowed; color: #d42929; background-color: rgb(229, 229, 229) !important; pointer-events: none';
        buttonCopiar.style = 'cursor: not-allowed; color: #d42929; background-color: rgb(229, 229, 229) !important; pointer-events: none';
    } else if(alfaNumsLetters.find(valor => valor.vacio === inputText.value.length)){
        info.style = 'font-weight: none';
        info.style.color = 'black';
        fraseMsg.style.display = 'block';
        errorInvalido.style.display = 'none';

        buttonOne.style = 'cursor: pointer; color: #6A1B9A; background-color: white; pointer-events: block';
        buttonTwo.style = 'cursor: pointer; color: #6A1B9A; background-color: white; pointer-events: block';
        buttonCopiar.style = 'cursor: pointer; color: #6A1B9A; background-color: white; pointer-events: block';
    }
})

inputText.addEventListener('keyup', () => {
    if(inputText.value.length == 0) {
        fraseMsg.style.display = "block";
        fraseMsg.innerText = 'Ningun mensaje fue encontrado';
        infoText.innerText = 'Ingresa el texto que desees encriptar o desencriptar';
        imagen.style.display = 'block';
    }else if (inputText.value.length >= 1) {
        fraseMsg.innerText = 'Puedes encriptar o desencriptar tu mensaje';
        infoText.innerText = inputText.value;
        imagen.style.display = 'none';
    }
})

buttonOne.onclick = () => {
    const ResultadoN = inputText.value;
    Encriptar(ResultadoN);

    buttonOne.style.backgroundColor = '#6A1B9A';
    buttonOne.style.border = '2px solid #6A1B9A';
    buttonOne.style.color = 'white';
}

buttonTwo.onclick = () => {
    const ResultadoN = inputText.value;
    Desencriptar(ResultadoN);

    buttonTwo.style.backgroundColor = '#6A1B9A';
    buttonTwo.style.border = '2px solid #6A1B9A';
    buttonTwo.style.color = 'white';
}

buttonCopiar.onclick = () => {
    var input = document.createElement('input');
    input.setAttribute('value', infoText.innerText);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    buttonCopiar.style.backgroundColor = '#6A1B9A';
    buttonCopiar.style.border = '2px solid #6A1B9A';
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
    buttonCopiar.style.color = '#6A1B9A';
    buttonCopiar.style.border = '2px solid #6A1B9A';
}

function botonOne() {
    buttonOne.style.display = 'block';
    buttonOne.style.backgroundColor = 'white';
    buttonOne.style.color = '#6A1B9A';
    buttonOne.style.border = '2px solid #6A1B9A';
}

function botonTwo() {
    buttonTwo.style.display = 'block';
    buttonTwo.style.backgroundColor = 'white';
    buttonTwo.style.color = '#6A1B9A';
    buttonTwo.style.border = '2px solid #6A1B9A';
}






