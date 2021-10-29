1. [VARIABLES] - use variables for the main values so that you'll be able to reuse them and give them descriptive names.
2. [CODE STYLE] - Avoid reassigning variables values. It's better to use `const` instead of 'let`.
3. [CODE STYLE] - You should return the value immediately in `if` statements
4. [REUSABILITY] - Give variables abstract names - it's will be easiar for another person to read your code 

GOOD EXAMPLE: 
```
const minDaysForBasicDiscount = 3;
```

BAD EXAMPLE:
```
const minDays = 3;
