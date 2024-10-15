/**
 * @param {number} days
 *
 * @return {number}
 */

const seven = 7;
const three = 3;

function calculateRentalCost(days) {
  if (days >= seven) {
    return days * 40 - 50;
  } else if (days >= three) {
    return days * 40 - 20;
  } else {
    return 80;
  }
}

module.exports = calculateRentalCost;
