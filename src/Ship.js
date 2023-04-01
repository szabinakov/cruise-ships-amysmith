class Ship {
    constructor(currentPort){
        this.currentPort = currentPort;
    };

    
    setSail() {
        this.currentPort = 0;
    };

    
    dock(port) {
        this.currentPort = port;
    };

};


module.exports = Ship;