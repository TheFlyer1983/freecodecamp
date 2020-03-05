function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["Mary", "Aarmy"]);

//Every Method

function mutation2(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(letter => {
      return arr[0]
        .toLowerCase()
        .indexOf(letter) != -1;
    });
}

mutation2(["Mary", "Aarmy"]);