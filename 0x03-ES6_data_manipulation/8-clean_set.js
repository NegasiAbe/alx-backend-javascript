export default function cleanSet(set, startString) {
    const filteredValues = [];
    for (const value of set) {
      if (value.startsWith(startString)) {
        filteredValues.push(value.substring(startString.length));
      }
    }
    return filteredValues.join('-');
  }
  