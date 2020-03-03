function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length){
    return str;
  }
  return str.substring(0, num)+'...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Ternary Method

function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString2("A-tisket a-tasket A green and yellow basket", 8);