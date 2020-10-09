function translatePigLatin(str) {
  const regex = /^[^aeiou]+/g;
  const consonants = str.match(regex);
  return consonants !== null
    ? str
      .replace(regex, "")
      .concat(consonants, "ay")
    : str.concat("way");
}

translatePigLatin("pqwaudrey");