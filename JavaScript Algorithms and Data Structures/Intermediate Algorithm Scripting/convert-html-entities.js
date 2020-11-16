function convertHTML(str) {
  let temp = str.split('');
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '&':
        temp[i] = '&amp;';
        break;
      case '<':
        temp[i] = '&lt;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
      default:
        break;
    }
    };
    
    temp = temp.join('');  

  return temp;
}

convertHTML("Dolce & Gabbana");

// Solution 2 - Using Map
function convertHTML2(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }

  return str.split('').map(i => htmlEntities[i] || i).join('');
}

convertHTML2("Dolce & Gabbana");

// Solution 3, using Regex.
function convertHTML3(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML3("Dolce & Gabbana");