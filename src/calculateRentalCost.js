/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days > 2 && days < 7) {
    return days * rentPrice - shortTermDiscount;
  }

  if (days >= 7) {
    return days * rentPrice - longTermDiscount;
  }

  return rentPrice * days;
}

module.exports = calculateRentalCost;
