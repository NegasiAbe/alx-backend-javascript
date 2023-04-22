/*export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [index, employee] of Object.entries(reportWithIterator)) {
    result += `${employee}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return output;
}*/
export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    output += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  return output;
}