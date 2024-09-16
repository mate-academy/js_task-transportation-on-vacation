/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40 * days;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const daysForSmallCount = 3;
  const daysForBigCount = 7;

  if (days >= daysForBigCount) {
    return rentalCost
    - bigDiscount;
  }

  if (days >= daysForSmallCount) {
    return rentalCost
    - smallDiscount;
  }

  return rentalCost;

}

module.exports = calculateRentalCost;
