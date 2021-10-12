function encodeAndDecodeMessages() {
    let mainElement = document.querySelectorAll('#main div');

    mainElement[0].querySelector('button').addEventListener('click', encodeMessage);
    mainElement[1].querySelector('button').addEventListener('click', decodeMessage);

    let encodeText = mainElement[0].querySelector('textarea');
    let decodeText = mainElement[1].querySelector('textarea');


    function encodeMessage(e) {
        encodeDecode(encodeText.value, 'encode')
    }

    function decodeMessage(e) {
        encodeDecode(decodeText.value, 'decode')
    }

    function encodeDecode(str, operation) {
        let newValue = '';

        if (operation == 'encode') {
            newValue = str
            .split('')
            .reduce((str, e) => str += String.fromCharCode(e.charCodeAt(0) + 1), '');
            encodeText.value = ''
            decodeText.value = newValue;
        } else if (operation = 'decode') {
            newValue = str
            .split('')
            .reduce((str, e) => str += String.fromCharCode(e.charCodeAt(0) - 1), '');
            
            decodeText.value = newValue
        }
    }
}