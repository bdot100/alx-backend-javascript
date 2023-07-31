export default function cleanSet(set, startString) {
  // catch edge cases
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  // Convert the set to an array to filter values
  const setArray = Array.from(set);

  // Filter the values that start with the specified startString
  const filteredValues = setArray.filter((value) => value.startsWith(startString));

  // Join the filtered values using '-'
  const resultString = filteredValues.join('-');

  return resultString;
}
