const DISCOUNT_WEEK_TERM = 7;
const DISCOUNT_WEEK_VALUE = 50;

const DISCOUNT_MID_TERM = 3;
const DISCOUNT_MID_VALUE = 20;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  switch (true) {
    case days >= DISCOUNT_WEEK_TERM:
      result -= DISCOUNT_WEEK_VALUE;
      break;
    case days >= DISCOUNT_MID_TERM:
      result -= DISCOUNT_MID_VALUE;
  }

  return result;
}

module.exports = calculateRentalCost;
