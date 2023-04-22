export default class Building {
    constructor(sqft) {
      this._sqft = typeof sqft === 'number' ? sqft : 0;
    }
  
    // getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // abstract method to be implemented by any subclass
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  