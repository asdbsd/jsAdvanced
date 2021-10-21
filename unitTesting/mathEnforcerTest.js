let { expect } = require('chai');
let mathEnforcer = require('./mathEnforcer');


describe('Math Enforcer', () => {
    describe('add five function', () => {
        it('have invalid input', () => {
            expect(mathEnforcer.addFive('1,2')).undefined
        })
    
        it('works with negative number', () => {
            expect(mathEnforcer.addFive(-2)).equal(3);
        })
    
        it('works with floating point number', () => {
            expect(mathEnforcer.addFive(2.01)).equal(7.01);
        })

        it('works with floating point number', () => {
            expect(mathEnforcer.addFive(15.05)).not.closeTo(20, 0.01);
        })

        it('have valid input', () => {
            expect(mathEnforcer.addFive(5)).equal(10);
        })  
    })
    
    describe('subtract ten', () => {
    
        it('input is not a number', () => {
            expect(mathEnforcer.subtractTen('1,2')).undefined
        })
    
        it('works with negative number', () => {
            expect(mathEnforcer.subtractTen(-12)).equal(-22);
        })
    
        it('works with floating point number', () => {
            expect(mathEnforcer.subtractTen(15.01)).closeTo(5, 0.01);
        })

        it('works with floating point number', () => {
            expect(mathEnforcer.subtractTen(15.05)).not.closeTo(5, 0.01);
        })

    
        it('have valid input', () => {
            expect(mathEnforcer.subtractTen(5)).equal(-5);
        })  
    })
    
    describe('sum two params', () => {
        it('have second element invalid', () => {
            expect(mathEnforcer.sum('2', 1)).undefined
        })
    
        it('have first element invalid', () => {
            expect(mathEnforcer.sum(2, '2')).undefined
        })
    
        it('have 2 invalid element', () => {
            expect(mathEnforcer.sum('2', '2')).undefined
        })
    
        it('should work with negative number', () => {
            expect(mathEnforcer.sum(-1, 2)).equal(1);
        })
    
        it('should work with floating point', () => {
            expect(mathEnforcer.sum(2.2, 3.5)).equal(5.7)
        })
    
        it('have 2 valid elements', () => {
            expect(mathEnforcer.sum(2, 2)).equal(4)
        })
     
    })
})

