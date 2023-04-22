export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [index, employee] of Object.entries(reportWithIterator)) {
    result += `${employee}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return output;
}