const rect = require('./rectangle')

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    rect(1, w, (err,rectangle) => {
        if (err) {
            console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
        } else {
            console.log(`Area of rectangle: ${rectangle.area(l, w)}`);
            console.log(`Perimeter of rectangle: ${rectangle.perimeter(l, w)}`);
        }
    })
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);