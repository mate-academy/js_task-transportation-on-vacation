1.[x] Make names descriptive, so they explain the purpose of variables and functions.
2.[x] Don't use literals in expressions (HARDCODE). Instead use constants explaining this values
    - BAD EXAMPLE:
    ```js
    if (numberOfDays >= 7) {
      return basePrice - 50;
    }
    ```
    - GOOD EXAMPLE:
    ```js
    const LONG_TERM = 7;
    const LONG_TERM_DISCOUNT = 50;

    if (numberOfDays >= LONG_TERM) {
      return basePrice - LONG_TERM_DISCOUNT;
    }
    ```
3.[x] Prefer `const` over `let` where possible, to avoid unintentional changes.
4.[x] Prefer `if` with `return` over `if else` to simplify later conditions.
5.[x] DON'T add `else` after `if` with `return` - the code after it won't be executed anyway.
    - BAD EXAMPLE:
    ```js
    if (condition) {
      return x;
    } else {
      return y;
    }
    ```
    - GOOD EXAMPLE:
    ```js
    if (condition) {
      return x;
    }

    return y;
    ```
