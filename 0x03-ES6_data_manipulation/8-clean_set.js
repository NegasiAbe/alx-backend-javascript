export default function cleanSet(set, startString) {
  if (startString === undefined) {
    return '';
  }
  const filteredValues = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  }
  return filteredValues.join('-');
}
