function chunkArrayInGroups(arr, size) {
  //Break it up.

  const ans = [];
  while (arr.length) { // 0 returns false
    ans.push(arr.splice(0, size));
  }
  return ans;
}

chunkArrayInGroups(["a", "b", "c", "d"],2);

//Slice and For Loop Method

function chunkArrayInGroups2(arr, size) {
  //Break it up.

  const ans = [];
  for (let i = 0; i < arr.length; i += size) {
    ans.push(arr.slice(i, i + size));
  }
  return ans;
}

console.log(chunkArrayInGroups2(["a", "b", "c", "d"],2));