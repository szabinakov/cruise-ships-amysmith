const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Portsmouth');

        expect(ship.startingPort).toBe('Portsmouth');
    });

    it('can set sail', () => {
        const ship = new Ship('Portsmouth');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});