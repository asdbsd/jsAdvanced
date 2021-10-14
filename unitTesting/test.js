const { expect } = require('chai');
const sum = require('./myModule').sum;


describe('First Test', () => {
    it('works with 5 & 3', () => {
        expect(sum(5 ,3)).equal(8)
    })
})