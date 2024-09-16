/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;

  if (days >= daysForBigDiscount) {
    return pricePerDay * days - bigDiscount;
  } else if (days >= daysForSmallDiscount) {
    return pricePerDay * days - smallDiscount;
  }

  return pricePerDay * days;
}

module.exports = calculateRentalCost;
