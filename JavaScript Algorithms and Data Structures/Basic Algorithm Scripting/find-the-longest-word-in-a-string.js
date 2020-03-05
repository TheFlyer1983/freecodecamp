//My Solution

function findLongestWordLength(str) {
  const strArray = str.split(' ');
  let length = 0;
  for (let i = 0; i < strArray.length; i++){
    if (strArray[i].length > length){
      length = strArray[i].length;
    }
  }
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Reduce Method

function findLongestWordLength2(str) {
  return str.split(' ')
            .reduce((x,y) => {
              return Math.max(x, y.length)
            }, 0);
}

findLongestWordLength2("The quick brown fox jumped over the lazy dog");

//Map Method

function findLongestWordLength3(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

findLongestWordLength3("The quick brown fox jumped over the lazy dog");