/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const basicDiscount = 50;
  const alternativeDiscount = 20;
  const rentalCost = price * days;

  if (days < 3) {
    return rentalCost;
  }

  if (days < 7) {
    return rentalCost - alternativeDiscount;
  }

  return rentalCost - basicDiscount;
}

module.exports = calculateRentalCost;
