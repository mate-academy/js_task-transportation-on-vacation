/* eslint-disable prettier/prettier */
function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

test('can sum 2 numbers', () => {
  let result = sum(3, 5);
  let expected = 8;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
});

test('can substract numbers', () => {
  let result = substract(3, 5);
  let expected = -2;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
});

function test(message, callback) {
  try {
    callback();
  } catch (error) {
    console.log(message);
    console.error(error);
  }
}
