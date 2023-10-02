export default function hasValueFromArray(set, arr) {
  for (const value of arr) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
