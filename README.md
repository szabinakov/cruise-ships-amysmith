This cruise ships project has a Ship object, Port object and Itineray object.

Ship object 
- imports from Itinerary an array of ports to dock at
- the currentPort = first port in the itinerary array
- using the addShip() and removeShip() from Port, the dock() method addShip() into the dockedShips array, and the setSai() method removeShip() from the array. I have added a function code to select and remove a specified ship from the array.

Dummies - I have tried jest.fn() but I don't fully understand it.

I have decided not to complete spy and stud as I really do not understand them.

While I understand the need to isolate tests, I find it difficult to understand the use of dummies, spies and studs. This is because I cannot see what actually happens when they are included in the tests, hence I cannot understand why they are used in tests.