function countOnline(usersObj) {
  // change code below this line
  let count = 0;
  for (let user in usersObj){
    if (usersObj[user].online === true) {
      count++;
    }
  }
  return count;
  // change code above this line
}
