/**
 * @param {number} days
 *
 * @return {number}
 */
const costRental = 40;
const mediumTerm = 3;
const mediumTermDiscound = 20;
const longTerm = 7;
const longTermDiscount = 50;

function calculateRentalCost(days) {
  let result = 0;

  if (days >= longTerm) {
    result = days * costRental - longTermDiscount;

    return result;
  }

  if (days >= mediumTerm) {
    result = days * costRental - mediumTermDiscound;

    return result;
  }

  result = days * costRental;

  return result;
}

module.exports = calculateRentalCost;
