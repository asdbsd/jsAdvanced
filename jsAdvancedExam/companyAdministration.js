const { expect } = require('chai');

const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

describe('companyAdministration', () => {

    describe('hiringEmployee', () => {
        it('should have invalid position and throw', () => {
            expect(() => companyAdministration.hiringEmployee('Chocho', 'None', 3)).throw('We are not looking for workers for this position.')
        });

        it('should have lower than required experience and return not approved', () => {
            expect(companyAdministration.hiringEmployee('Chocho', 'Programmer', 2)).equal('Chocho is not approved for this position.')
        });

        it('should have lower than required experience and return not approved', () => {
            expect(companyAdministration.hiringEmployee('Chocho', 'Programmer')).equal('Chocho is not approved for this position.')
        });

        it('should meet required years of experience edge 3', () => {
            expect(companyAdministration.hiringEmployee('Chocho', 'Programmer', 3)).equal('Chocho was successfully hired for the position Programmer.')
        });

        it('should have over required years of experience', () => {
            expect(companyAdministration.hiringEmployee('Chocho', 'Programmer', 4)).equal('Chocho was successfully hired for the position Programmer.')
        });


        
    });

    describe('calculateSalary', () => {
        it('should have invalid hours and throw', () => {
            expect(() => companyAdministration.calculateSalary('a')).throw('Invalid hours');
        });

        it('should have invalid(negativeNumber) hours and throw', () => {
            expect(() => companyAdministration.calculateSalary(-1)).throw('Invalid hours');
        });

        it('should have invalid(negativeNumber) hours and throw', () => {
            expect(() => companyAdministration.calculateSalary([1])).throw('Invalid hours');
        });

        it('should have invalid(negativeNumber) hours and throw', () => {
            expect(() => companyAdministration.calculateSalary('-1')).throw('Invalid hours');
        });

        it('should have invalid(negativeNumber) hours and throw', () => {
            expect(() => companyAdministration.calculateSalary(-0.25)).throw('Invalid hours');
        });

        it('should have 0 hours', () => {
            expect(companyAdministration.calculateSalary(0)).equal(0);
        });

        it('should have valid Input with less than 160 hours', () => {
            expect(companyAdministration.calculateSalary(30)).equal(450);
        });
        
        it('should have valid Input with exactly 160 hours', () => {
            expect(companyAdministration.calculateSalary(160)).equal(2400);
        });

        it('should have valid Input with more than 160 hours', () => {
            expect(companyAdministration.calculateSalary(161)).equal(3415);
        });

        it('should have valid Input with floating number', () => {
            expect(companyAdministration.calculateSalary(2.5)).equal(37.5);
        });
    });

    describe('firedEmployee', () => {
        it('should have invalid array and index', () => {
            expect(() => companyAdministration.firedEmployee([], 'a')).throw('Invalid input');
        });

        it('should have invalid array and index', () => {
            expect(() => companyAdministration.firedEmployee('[]', 'a')).throw('Invalid input');
        });

        it('should have valid array but invalid index', () => {
            expect(() => companyAdministration.firedEmployee(['George', 'Ivan'], 'a')).throw('Invalid input');
        });

        it('should have valid array but invalid index', () => {
            expect(() => companyAdministration.firedEmployee(['George', 'Ivan'], 1.5)).throw('Invalid input');
        });
        

        it('should have valid index but invalid array', () => {
            expect(() => companyAdministration.firedEmployee('[]', 2)).throw('Invalid input');
        });

        it('should have valid index but invalid array', () => {
            expect(() => companyAdministration.firedEmployee([], 2)).throw('Invalid input');
        });

        it('should have invalid index but valid array', () => {
            expect(() => companyAdministration.firedEmployee(['George', 'Chocho'], 2)).throw('Invalid input');
        });

        it('should have invalid index but valid array', () => {
            expect(() => companyAdministration.firedEmployee(['George', 'Chocho'], 2)).throw('Invalid input');
        });

        it('should have invalid index but valid array', () => {
            expect(() => companyAdministration.firedEmployee(['George', 'Chocho'])).throw('Invalid input');
        });

        it('should have invalid index but valid array', () => {
            expect(() => companyAdministration.firedEmployee(2)).throw('Invalid input');
        });

        it('should have invalid index but valid array', () => {
            expect(() => companyAdministration.firedEmployee(['George', 'Chocho'], -1)).throw('Invalid input');
        });

        it('should have valid inputs', () => {
            expect(companyAdministration.firedEmployee(['George', 'Chocho', 'Ivan'], 2)).equal('George, Chocho');
        });
        
        it('should have valid inputs and return empty string', () => {
            expect(companyAdministration.firedEmployee(['George'], 0)).equal('');
        });
        
        it('should have valid inputs', () => {
            expect(companyAdministration.firedEmployee(['George', 'Chocho', 'Ivan'], 2)).equal('George, Chocho');
        })

    });
});