class Ship {
    constructor(startingPort){
        this.startingPort = startingPort;
    };

    setSail() {
        this.startingPort = 0;
    }
};

module.exports = Ship;