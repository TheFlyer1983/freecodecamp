/* My Solution */
function myReplace(str, before, after) {
  let character = before.substr(0,1);

  if (character === character.toUpperCase()) {
    let modifiedCharacter = after.substr(0,1).toUpperCase();
    after = after.replace(after.substr(0,1), modifiedCharacter);
  } else {
    let modifiedCharacter = after.substr(0,1).toLowerCase();
    after = after.replace(after.substr(0,1), modifiedCharacter);
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Second Solution */

function myReplace2(str, before, after) {
  let index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase + after.slice(1);
  }

  return str.replace(before, after);
}

myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped");