let repeatNum = "42 42 42";
let reRegex = /^(\d{2,})\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
