/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const bill = price * days;

  if (days < 3) {
    return bill;
  }

  if (days < 7) {
    return bill - smallDiscount;
  }

  return bill - bigDiscount;
}

module.exports = calculateRentalCost;
