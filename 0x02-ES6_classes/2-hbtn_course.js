/*export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = typeof name === 'string' ? name : '';
      this._length = typeof length === 'number' ? length : 0;
      this._students = Array.isArray(students) ? students : [];
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
  
    // getters and setters for length
    get length() {
      return this._length;
    }
  
    set length(length) {
      if (typeof length === 'number') {
        this._length = length;
      }
    }
  
    // getters and setters for students
    get students() {
      return this._students;
    }
  
    set students(students) {
      if (Array.isArray(students)) {
        this._students = students;
      }
    }
  }
*/

export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') throw new TypeError('name must be a string');
      if (!Number.isInteger(length)) throw new TypeError('length must be a number');
      if (!Array.isArray(students)) throw new TypeError('students type must be an Array');
  
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    set name(val) {
      if (typeof val !== 'string') throw new TypeError('name must be a string');
      this._name = val;
    }
  
    get length() {
      return this._length;
    }
  
    set length(val) {
      if (!Number.isInteger(val)) throw new TypeError('length must be a number');
      this._length = val;
    }
  
    get students() {
      return this._students;
    }
  
    set students(val) {
      if (!Array.isArray(val)) throw new TypeError('students type must be an Array');
      this._students = val;
    }
  }