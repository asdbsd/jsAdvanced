const { expect } = require('chai');

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};




describe('Test Numbers', () => {

    describe('sumNumbers', () => {
        it('should return undefined', () => {
            expect(testNumbers.sumNumbers('2', 1)).undefined;
            expect(testNumbers.sumNumbers(1, '2')).undefined;
            expect(testNumbers.sumNumbers()).undefined;
        });

        it('should return result fixed to second digit', () => {
            expect(testNumbers.sumNumbers(2,4)).equal('6.00');
            expect(testNumbers.sumNumbers(2.5,4)).equal('6.50');
        });
            
    });

    describe('numberChecker', () => {
        it('should throw input not a number', () => {
            expect(() => testNumbers.numberChecker('a')).throw('The input is not a number!');
            expect(() => testNumbers.numberChecker()).throw('The input is not a number!');

        });

        it('should return even or odd', () => {
            expect(testNumbers.numberChecker('2')).equal('The number is even!');
            expect(testNumbers.numberChecker('1')).equal('The number is odd!');
        });
    });

    describe('averageSumArray', () => {
        it('should return NaN', () => {
            expect(testNumbers.averageSumArray([])).to.be.NaN
        });

        it('should return average', () => {
            expect(testNumbers.averageSumArray([1])).to.equal(1);
            expect(testNumbers.averageSumArray([1,3])).to.equal(2);
            expect(testNumbers.averageSumArray([2.5, 3, 2.1])).closeTo(2.53, 0.01);
        });
    });
    
});



