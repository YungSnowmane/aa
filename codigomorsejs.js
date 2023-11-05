const codigomorse = {
    'A':'.-','B': '-...','C': '-.-.','D': '-..','E': '.','F': '..-.','G': '--.','H': '....','I': '..','J': '.---','K': '-.-','L': '.-..','M': '--','N': '-.','O': '---','P': '.--.','Q': '--.-','R': '.-.','S': '...','T': '-','U': '..-','V': '...-','W': '.--','X': '-..-','Y': '-.--','Z': '--..', '1':'.-----','1':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','0':'-----',' ':'/'
};
const codigomorseaocontrario = {}
    for(const chave in codigomorse){
        if (codigomorse.hasOwnProperty(chave)){
            codigomorseaocontrario[codigomorse[chave]] = chave;
        }
    }              
function codificar(){
    const texto = document.getElementById('cripto').value.toUpperCase(); 
    let morsecodigo = '';

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (codigomorse[letra]){
            morsecodigo += codigomorse[letra] + ' ';
        }
    }
    document.getElementById('descripto').value = morsecodigo;
}   
function decodificar(){
    const inputMorse = document.getElementById('descripto').value;
    const morseArray = inputMorse.split(' ');
    let textodescripto = '';
    for(let i = 0; i< morseArray.length; i++) {
        const codigo = morseArray[i];
        if (codigomorseaocontrario[codigo]){
            textodescripto += codigomorseaocontrario[codigo];
        }
        else if (codigo === '/')
        {
            textodescripto += ' ';
        }
    }
    document.getElementById('cripto').value = textodescripto;
};
