
export default function iterateThroughObject(reportWithIterator) {
    for (let key of reportWithIterator) {
      console.log(`Category: ${key}`);
      let employees = reportWithIterator[key];
      for (let employee of employees) {
        console.log(`Employee: ${employee}`);
      }
    }
  }
  