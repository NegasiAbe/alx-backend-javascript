export default class ClassRoom {
    constructor(maxStudentsSize) {
      this._maxStudentsSize = maxStudentsSize;
    }
    
    set maxStudentsSize(size) {
      this._maxStudentsSize = size;
    }
    
    get maxStudentsSize() {
      return this._maxStudentsSize;
    }
  }

  
  