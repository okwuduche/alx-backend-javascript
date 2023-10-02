export default function updateUniqueItems(mpa) {
  if (!(mpa instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const [key, value] of mpa) {
    if (value === 1) {
      mpa.set(key, 100);
    }
  }
  return mpa;
}
