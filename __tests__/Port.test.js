const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');


describe('Port', () => {
    describe('with ports and ship', () => {
        const port = new Port('Portsmouth');
    
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    
    it('has a port name', () => {
       expect(port.name).toBe('Portsmouth');
    });

    it('add ship that dock in port', () => {
        const ship = jest.fn();

        port.addShip(ship);
 
        expect(port.dockedShips).toContain(ship);
     });

    it('remove ship that leaves port', () => {
        const port = new Port('Portsmouth');
        const cuttysark = jest.fn();
        const endeavour = jest.fn();
        port.addShip(cuttysark);
        port.addShip(endeavour);

        port.removeShip(cuttysark);
 
        expect(port.dockedShips).toEqual([endeavour]);
     });
    });
});