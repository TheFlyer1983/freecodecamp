
function titleCase(str) {
  return str.toLowerCase().split(" ").map((word) => {
    return word[0].toUpperCase() + word.substr(1);
  }).join(" ");
}

titleCase("I'm a little tea pot");
