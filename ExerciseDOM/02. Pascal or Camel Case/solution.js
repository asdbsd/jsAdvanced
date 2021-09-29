function solve() {
  const inputList = document.getElementById('text').value.split(' ');
  const caseRequired = document.getElementById('naming-convention').value;
  const cases = {
    "Camel Case": getCase(),
    "Pascal Case": getCase()
  }

  if (!cases[caseRequired]) {
    document.getElementById('result').textContent ='Error!';
    return;
  }

  const result = cases[caseRequired];
  document.getElementById('result').textContent = result;

  function getCase() {
    return inputList.reduce((res, e, i) => reducedToCased(res, e, i), "")

    function reducedToCased(res, e, i) {
      let lowerCaseElement = e.toLowerCase();

      if (caseRequired == 'Camel Case') {
        if (i === 0) {
          res += lowerCaseElement[0];
        } else {
          res += lowerCaseElement[0].toUpperCase();
        }
      } else if (caseRequired == 'Pascal Case') {
        res += lowerCaseElement[0].toUpperCase();
      }
      res += lowerCaseElement.substring(1, lowerCaseElement.length)
      return res;
    }
    
  }

}