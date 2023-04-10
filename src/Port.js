class Port {
    constructor(name){
        this.name = name;
        this.dockedShips = [];
    };

    addShip(ship) {
        this.dockedShips.push(ship);
    };

    removeShip(ship) {
        const foundIndex = this.dockedShips.findIndex(element => element === ship);
        this.removeAnyShip(foundIndex);  
    };

    removeAnyShip(index) {
        if (index > -1) {
          this.dockedShips.splice(index, 1);
        };
    };
};


module.exports = Port;