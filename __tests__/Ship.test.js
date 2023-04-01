const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
        const portsmouth = new Port('Portsmouth');
        const ilfracombe = new Port('Ilfracombe');
        const itinerary = new Itinerary([portsmouth, ilfracombe]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock at different port', () => {
        const portsmouth = new Port('Portsmouth');
        const ilfracombe = new Port('Ilfracombe');
        const itinerary = new Itinerary([portsmouth, ilfracombe]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(ilfracombe);
    });

    it('cannot sail further than its itinerary', () => {
        const portsmouth = new Port('Portsmouth');
        const ilfracombe = new Port('Ilfracombe');
        const itinerary = new Itinerary([portsmouth, ilfracombe]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('-- End of itinerary --');
      });
});