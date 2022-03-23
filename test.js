var add = require('./calculator').add;

function assertEqual(expected, actual) {
  if (expected !== actual) {
    console.error(`❌ Failed: Expected ${expected} to be ${actual}`);
    process.exit(0);
  } else {
    console.info(`✅ Passed: Expected ${expected} === ${actual}`);
  }
}

// a simple addition
assertEqual(add(3, 5), 8);

// handles zeroes correctly
assertEqual(add(0, 0), 0);

// works with negative numbers
assertEqual(add(-1, -2), -3);

// simply ignores null values
// -> design decision!
assertEqual(add(1, null), 1);
assertEqual(add(null, 1), 1);

// does not work with non-decimal values
// assertEqual(add(1, 'A'), NaN);
// assertEqual(add('A', 1), NaN);
