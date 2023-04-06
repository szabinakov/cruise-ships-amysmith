const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let portsmouth;
        let ilfracombe;
        let itinerary;

        beforeEach(() => {
        portsmouth = new Port('Portsmouth');
        ilfracombe = new Port('Ilfracombe');
        itinerary = new Itinerary([portsmouth, ilfracombe]);
        ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
       /*  const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary); */

        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
        
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(portsmouth.dockedShips).not.toContain(ship);
    });

    it('gets added to port on instantiation', () => {
      
        expect(portsmouth.dockedShips).toContain(ship);
      });
    });

    it('can dock at different port', () => {
        const portsmouth = new Port('Portsmouth');
        const ilfracombe = new Port('Ilfracombe');
        const itinerary = new Itinerary([portsmouth, ilfracombe]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(ilfracombe);
        expect(ilfracombe.dockedShips).toContain(ship);
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