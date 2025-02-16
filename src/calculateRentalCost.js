/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;
  const carRentPricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const totalRentCost = carRentPricePerDay * days;

  if (days < daysForSmallDiscount) {
    return totalRentCost;
  }

  if (days >= daysForBigDiscount) {
    return totalRentCost - bigDiscount;
  }

  return totalRentCost - smallDiscount;
}

module.exports = calculateRentalCost;
