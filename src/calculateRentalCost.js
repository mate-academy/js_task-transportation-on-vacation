/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rentAmount = 0;
  const RENT_A_DAY = 40;
  const FIRST_DAY = 1;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 30;

  for (let countOfDays = FIRST_DAY; countOfDays <= days; countOfDays++) {
    rentAmount += RENT_A_DAY;

    if (countOfDays === SHORT_TERM) {
      rentAmount -= SHORT_TERM_DISCOUNT;
    }

    if (countOfDays === LONG_TERM) {
      rentAmount -= LONG_TERM_DISCOUNT;
    }
  }

  return rentAmount;
}

module.exports = calculateRentalCost;
