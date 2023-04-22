export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Getter for size
    get size() {
      return this._size;
    }
  
    // Setter for size
    set size(size) {
      this._size = size;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  
    // Setter for location
    set location(location) {
      this._location = location;
    }
  
    // Number conversion of the class
    valueOf() {
      return this._size;
    }
  
    // String conversion of the class
    toString() {
      return this._location;
    }
  }
  