1. [VARIABLES] - use variables for the main values so that you can reuse them and give them descriptive names.
2. [CODE STYLE] - Avoid reassigning variables values. It's better to use `const` instead of `let`.
3. [CODE STYLE] - You should return the value immediately in `if` statements. And don't use `else` after return statement. If `return` is performed - code after it won't be executed anyway.
BAD EXAMPLE:
```
if (condition) {
  return x;
} else {
  return y;
}
```
GOOD EXAMPLE: 
```
if (condition) {
  return x;
}
return y;
```


4. [REUSABILITY] - Give variables abstract names - it's will be easiar for another person to read your code 
5. [VARIABLES] - Don't hardcode some values that may change in the future in variable names (numbers etc.)

BAD EXAMPLE:
```
const discountForThreeDays = 50;
```
GOOD EXAMPLE: 
```
const basicDiscount = 50;
```
