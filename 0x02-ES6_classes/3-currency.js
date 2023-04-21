/*class Currency {
    constructor(code, name) {
      this._code = typeof code === 'string' ? code : '';
      this._name = typeof name === 'string' ? name : '';
    }
  
    // getters and setters for code
    get code() {
      return this._code;
    }
  
    set code(code) {
      if (typeof code === 'string') {
        this._code = code;
      }
    }
  
    // getters and setters for name
    get name() {
      return this._name;
    }
  
    set name(name) {
      if (typeof name === 'string') {
        this._name = name;
      }
    }
  
    // method to display currency code and name
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }*/
  export default class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(n) {
      this._name = n;
    }
  
    get code() {
      return this._code;
    }
  
    set code(c) {
      this._name = c;
    }
  
    displayFullCurrency() {
      return `${this.name} (${this.code})`;
    }
  }

  