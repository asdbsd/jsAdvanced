let { expect } = require('chai');
let lookupChar = require('./lookupChar');


describe('char lookup test', () => {
    it('1st item is not a string', () => {
        expect(lookupChar(1,1)).to.be.undefined;
    })

    it('1st item is not a number', () => {
        expect(lookupChar('1','1')).to.be.undefined;
    })

    it('both items have different types', () => {
        expect(lookupChar(2, '2')).to.be.undefined
    })

    it('index is higher than input string length', () => {
        expect(lookupChar('asd', 3)).equal('Incorrect index');
    })

    it('index is lower than 0', () => {
        expect(lookupChar('asd', -1)).equal('Incorrect index');
    })

    it('index is incorrect', () => {
        expect(lookupChar('asf', 3.5)).to.be.undefined
    })

    it('values are correct, expecting correct answer', () => {
        expect(lookupChar('asd', 1)).equal('s');
    })

})

