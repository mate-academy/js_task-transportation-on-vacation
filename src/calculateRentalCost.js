/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const price = 40;
  const sumePrice = price * days;
  const moreTerm = 7;
  const moreTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  if (days >= moreTerm) {
    return sumePrice - moreTermDiscount;
  }

  if (days >= mediumTerm) {
    return sumePrice - mediumTermDiscount;
  }

  return sumePrice;
}

module.exports = calculateRentalCost;
