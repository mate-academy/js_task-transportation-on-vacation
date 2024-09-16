/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const smallDiscount = 20;
  const normalDiscount = 50;
  const rentalCost = dayCost * days;
  const dayWitoutDiscount = 3;
  const daysWithBigDiscount = 7;

  if (days < daysWithBigDiscount && days >= dayWitoutDiscount) {
    return rentalCost - smallDiscount;
  }

  if (days >= daysWithBigDiscount) {
    return rentalCost - normalDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
