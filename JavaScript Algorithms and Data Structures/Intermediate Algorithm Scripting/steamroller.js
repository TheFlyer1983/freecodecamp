function steamrollArray(arr) {
  return flatten(
    arr.map(x => Array.isArray(x) ? steamrollArray(x) : x)
  );
}

function flatten(arr) {
  return [].concat(...arr);
}

steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray2(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray2([1, [2], [3, [[4]]]]);