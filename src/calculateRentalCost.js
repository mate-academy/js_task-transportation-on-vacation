/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const cost = days * rent;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 7) {
    return (cost - longTermDiscount);
  }

  if (days >= 3) {
    return (cost - shortTermDiscount);
  }

  return cost;
}

module.exports = calculateRentalCost;
