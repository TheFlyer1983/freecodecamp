function pairElement(str) {
  const strArr = str.split('');
  const arr = [];
  for (let i = 0; i < strArr.length; i++){
    arr.push([strArr[i]]);
  }

  arr.map(i => {
    switch (i[0]) {
      case 'G':
        i.push('C');
        break;
      case 'C':
        i.push('G');
        break;
      case 'A':
        i.push('T');
        break;
      case 'T':
        i.push('A');
        break;  
      default:
        break;
    }
  })

  return arr;
}

pairElement("GCGTA");

// Second Implementation - Using object and map.

function pairElement2(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  const arr = str.split('');
  
  return arr.map(i => [i, pairs[i]]);
}

console.log('Pair Elements 2',pairElement2('GCGTA'));