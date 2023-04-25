function cleanSet(set, startString) {
  const filteredValues = [];
  for (const value of set) {
    if (startString && value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  }
  return filteredValues.join('-');
}
