function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i = arr.length-1; i >= 0; i--){
    if (!arr[i]){
      arr.splice(i,1);
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);

// Filter Method

function bouncer2(arr) {
  return arr.filter(Boolean);
}

bouncer2([7, "ate", "", false, 9]);