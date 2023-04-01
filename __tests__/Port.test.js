const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    
    it('has a port name', () => {
       const port = new Port('Portsmouth');

       expect(port.name).toBe('Portsmouth');
});

});