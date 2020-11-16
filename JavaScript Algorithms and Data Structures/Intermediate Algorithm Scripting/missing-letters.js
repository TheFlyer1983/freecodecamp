function fearNotLetter(str) {
  let result = undefined;
  for (let i = 0; i < str.length; i++){
    if (str.charCodeAt(i)+1 !== str.charCodeAt(i+1) && str.charAt(i+1) !== ''){
      result = String.fromCharCode(str.charCodeAt(i)+1);
    }
  }

  return result;
}

fearNotLetter("abce");