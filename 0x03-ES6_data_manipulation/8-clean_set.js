export default function cleanSet(set, startString) {
  // Result
  const result = [];

  // catch edge cases
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);

      if (subStr && subStr !== value) {
        result.push(subStr);
      }
    }
  }
  return result.join('-');
}
