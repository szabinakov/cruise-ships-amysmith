const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has ports', () => {
        const portsmouth = new Port('Portsmouth');
        const ilfracombe = new Port('Ilfracombe');
        
        const itinerary = new Itinerary([portsmouth, ilfracombe]);
 
        expect(itinerary.ports).toEqual([portsmouth, ilfracombe]);
 });

});