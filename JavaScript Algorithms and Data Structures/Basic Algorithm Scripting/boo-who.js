function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof(bool) === 'boolean' ? true : false;
}

booWho(null);

//A little more succinct

function booWho2(bool) {
  return typeof bool === 'boolean';
}

booWho2(null);