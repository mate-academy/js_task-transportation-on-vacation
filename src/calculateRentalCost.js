/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 7) {
    return dayRentCost * days - longTermDiscount;
  }

  if (days >= 3) {
    return dayRentCost * days - shortTermDiscount;
  } else {
    return dayRentCost * days;
  }
}

module.exports = calculateRentalCost;
