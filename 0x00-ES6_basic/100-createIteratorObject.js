export default function createIteratorObject(report) {
    const employees = [];
  
    for (const department of Object.values(report)) {
      for (const employee of department.employees) {
        employees.push(employee);
      }
    }
  
    let currentIndex = 0;
  
    return {
      next: function() {
        return currentIndex < employees.length ?
          { value: employees[currentIndex++], done: false } :
          { done: true };
      }
    };
  }
  