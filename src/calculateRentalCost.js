/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  let totalRent = 0;

  if (days >= longTerm) {
    totalRent = dayRent * days - longTermDiscount;
  } else if (days >= mediumTerm) {
    totalRent = dayRent * days - mediumTermDiscount;
  } else {
    totalRent = dayRent * days;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
