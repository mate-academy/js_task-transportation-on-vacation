/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const amount = days * price;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const bigDay = 7;
  const smallDay = 3;

  if (days >= bigDay) {
    return amount - bigDiscount;
  }

  if (days >= smallDay) {
    return amount - smallDiscount;
  }

  return amount;
}

module.exports = calculateRentalCost;
