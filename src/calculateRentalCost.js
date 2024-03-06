/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let TOTAL = 0;

  if (days < 3) {
    TOTAL = days * 40;
  } else if (days <= 6) {
    TOTAL = days * 40 - 20;
  } else {
    TOTAL = days * 40 - 50;
  }

  return TOTAL;
}

module.exports = calculateRentalCost;
