const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Portsmouth');
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
        const port = new Port('Portsmouth');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock at different port', () => {
        const portsmouth = new Port('Portsmouth');
        const ship = new Ship(portsmouth);

        const ilfracombe = new Port('Ilfracombe');
        ship.dock(ilfracombe);

        expect(ship.currentPort).toBe(ilfracombe);
    });
});