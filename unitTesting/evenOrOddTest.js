const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');


describe('test values', () => {
    it('has even length', () =>  {
        expect(isOddOrEven('as')).equal('even');
    })
    
    it('has odd length', () => {
        expect(isOddOrEven('a')).equal('odd');
    })


})

