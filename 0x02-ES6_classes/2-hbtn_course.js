class HolbertonCourse {
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
  