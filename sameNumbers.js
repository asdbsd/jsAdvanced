function sameNumbers(number) {
    let numbers = number.toString().split('');
    let numbersSum = 0;
    let isSame = false;
    let matchNumber = numbers[0];
    

    numbers.forEach((number) => numbersSum += Number(number));

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === matchNumber) {
            isSame = true;
        } else {
            isSame = false;
            break;
        }
    }

    console.log(isSame.toString());
    console.log(numbersSum);

}

sameNumbers(2222222);
sameNumbers(1234);
sameNumbers(1)
