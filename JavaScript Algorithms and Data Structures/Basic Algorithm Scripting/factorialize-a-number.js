function factorialize(num) {
  if (num > 0){
    const factorArray = [];
    let returnNum = 0;

    for (let i = num; i > 0; i--){
      factorArray.unshift(i);
    }


    
    for (let i = 0; i < factorArray.length; i++){
      if (i === 0){
        returnNum = factorArray[i];
      } else {
        returnNum = returnNum * factorArray[i];
      }
    }
    return returnNum;
  } else {
    return num = 1;
  }
}

factorialize(5);

//Recursive Method

function factorialize2(num){
  if (num == 0){
    return 1;
  } else {
    return num * factorialize2(num - 1);
  }

}

factorialize2(5);
