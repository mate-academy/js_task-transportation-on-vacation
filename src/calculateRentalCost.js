/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40 * days;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return rent;
  }

  if (days < 7) {
    return rent - smallDiscount;
  }

  return rent - bigDiscount;
}

module.exports = calculateRentalCost;
