export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(name) {
      this._name = name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Setter for code
    set code(code) {
      this._code = code;
    }
  
    // Default string description of the class
    toString() {
      return this._code;
    }
  }
  