const { expect } = require("chai");

const cinema = {
    showMovies: function(movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function(projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function(firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

describe('Cinema App Test', function() {

    it('should have function showMovies', function() {
        expect(typeof cinema.showMovies).equal('function');
        expect(typeof cinema.ticketPrice).equal('function');
        expect(typeof cinema.swapSeatsInHall).equal('function');
    })

    describe('Test Show Movies', function() {
        it('should return \'text\' with empty arrray', function() {
            expect(cinema.showMovies([])).equal('There are currently no movies to show.');
        });

        it('should return 1 item', function() {
            expect(cinema.showMovies(['Escalibur'])).equal('Escalibur');
        });


        it('should return joined the elements of given array', function() {
            expect(cinema.showMovies(['a', 'b', 'c'])).equal('a, b, c');
        });
    });

    describe('ticketPrice', function() {
        it('should return \'text\' with incorrect projection type', function() {
            expect(() => cinema.ticketPrice('WRONG')).to.throw('Invalid projection type.');
        });

        it('should return \'text\' with incorrect projection type', function() {
            expect(() => cinema.ticketPrice(2)).to.throw('Invalid projection type.');
        });
        
        it('should return 12.00', function() {
            expect(cinema.ticketPrice('Premiere')).equal(12.00);
        });

        it('should return 7.50', function() {
            expect(cinema.ticketPrice('Normal')).equal(7.50);
        });

        it('should return 5.50', function() {
            expect(cinema.ticketPrice('Discount')).equal(5.50);
        });
    });

    describe('swapSeatsInHall', function() {
        it('should not be successfull', function() {
            expect(cinema.swapSeatsInHall('a', 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a', 'b')).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 'b')).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 21)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 0)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, -2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-2, -2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 21)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 2.5)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2.5)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2.5)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 20.1)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2,[])).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, {})).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, false)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([],2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall({}, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(false, 2)).equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall()).equal('Unsuccessful change of seats in the hall.');




        });

        it('should be successfull', function() {
            expect(cinema.swapSeatsInHall(2, 3)).equal('Successful change of seats in the hall.');
        });


    });

});

