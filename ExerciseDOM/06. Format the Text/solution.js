function solve() {
  const inputText = document.querySelector('#input').value;
  const sentences = inputText.split('.').filter((e) => e !== '');
  const sentencesInitialCount = Number((sentences.length / 2).toFixed(0))
  document.getElementById('output').textContent = '';




  for (let i = 0; i < sentences.length; i++) {
    let newElement = document.createElement('p');
    if (sentences.length < 4 && sentences.length !== 0) {
      newElement.textContent = `${sentences.join('.') + '.'}`;
      i+=3
      document.getElementById('output').appendChild(newElement);
    } else if (sentences.length >= 4 && sentences.length <= 6  || sentences.length > 7) {
      if (i % 3 === 0) {
        newElement.textContent = `${sentences.slice(i, i+3).join('.') + '.'}`;
        document.getElementById('output').appendChild(newElement);
      }
    } else if (sentences.length == 7) {
      let lastSentence = sentences.slice(sentences.length - 1, sentences.length);
      if (i % 3 === 0 && i !== 6) {
        newElement.textContent = `${sentences.slice(i, i+3).join('.') + '.'}`;
        document.getElementById('output').appendChild(newElement);
      } else if (i === 6) {
        newElement.textContent = lastSentence[0] + '.';
        document.getElementById('output').appendChild(newElement);
      }
    }
  }


  
  // if (sentences.length <= 3) {
  //   let newElement = document.createElement(`<p>${sentences.join('.')}</p>`);
    
  //   document.getElementById('output').appendChild(newElement);
  // } else if (sentences.length < 7 || sentences.length> 7) { 
  //   for (let i = 0; i < sentencesInitialCount; i++) { 
  //     let newElement = document.createElement('p');
  //     let paragraphElements = sentences.splice(0, 3);
  //     newElement.textContent = paragraphElements.join('.') + '.';
  //     document.getElementById('output').appendChild(newElement);
  //   }
  // } else if(sentences.length == 7) {
  //   let lastSentence = sentences.splice(-1, 1);
  //   for (let i = 0; i < 2; i++) {
  //     let newElement = document.createElement('p');
  //     let paragraphElements = sentences.splice(0, 3);
  //     newElement.textContent = paragraphElements.join('.') + '.';
  //     document.getElementById('output').appendChild(newElement);
  //   }

    
  // }


}