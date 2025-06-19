const dotenv = require('dotenv');
dotenv.config();

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let total = 40 * days;

  if (days >= process.env.MAXIMUM_DISCOUNT) {
    return total -= 50;
  }

  if (days >= process.env.MINIMUM_DISCOUNT) {
    return total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;
