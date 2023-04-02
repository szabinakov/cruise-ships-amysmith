const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');


describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    
    it('has a port name', () => {
       const port = new Port('Portsmouth');

       expect(port.name).toBe('Portsmouth');
    });

    it('add ship that dock in port', () => {
        const port = new Port('Portsmouth');
        //const ship = {};
        const cuttysark = {};
        const endeavour = {};
        port.addShip(cuttysark);
        port.addShip(endeavour);

        //port.addShip(ship);
 
        expect(port.dockedShips).toContain(cuttysark);
     });

    it('remove ship that leaves port', () => {
        const port = new Port('Portsmouth');
        const cuttysark = {};
        const endeavour = {};
        port.addShip(cuttysark);
        port.addShip(endeavour);

        port.removeShip(cuttysark);
 
        expect(port.dockedShips).toEqual([endeavour]);
     });

});