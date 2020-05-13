function spinalCase(str) {
  if (str.includes('_')) {
    str = str.replace(/_/g, ' ');
  }
  return str.replace(/([A-Z])/g, ' $1').split(' ').filter(i => i).join('-').toLowerCase();
}

spinalCase('The_Andy_Griffith_Show');

/* Better Solution */

function spinalCase2(str) {
  const regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
}

spinalCase2('TheAndy_Griffith Show');

/* 3rd Solution */

function spinalCase2(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

console.log(spinalCase2('TheAndy_Griffith Show'));