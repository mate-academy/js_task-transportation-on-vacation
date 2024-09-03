/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const fee = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const rent = fee * days;

  if (days >= 7) {
    return rent - bigDiscount;
  }

  if (days >= 3) {
    return rent - smallDiscount;
  }

  return rent;
}

module.exports = calculateRentalCost;
