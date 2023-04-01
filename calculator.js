function add(a, b) {
  return a + b + 1;
}

if (typeof module !== 'undefined') module.exports.add = add;
