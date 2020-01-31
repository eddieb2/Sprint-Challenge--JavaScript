// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//SURFACE AREA OF A CUBE: A=6a^2 
// VOLUME OF A CUBE: V=a^3
// a symmetrical three-dimensional shape, either solid or hollow, contained by six equal squares.//

// EXPLAINATION: We only need one side of the cube to calc volume and surfaceArea, so I made the methods only take one side into account for the calculations. 
class CubeMaker extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }
  volume(){
   return this.length * this.length * this.length
  }
  surfaceArea(){
    return 6 * (this.length * this.length)
  }
}

const cube = new CubeMaker(5,5,5) // have to enter 
console.log(cube.volume()); // confirmed correct
console.log(cube.surfaceArea()); // confirmed correct