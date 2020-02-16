let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
//let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Another way of checking the minimum length
let result = userCheck.test(username);
