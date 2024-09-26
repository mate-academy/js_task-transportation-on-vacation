/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCostPerDay = 40;
  const rentalCost = rentalCostPerDay * days;

  const longRentalDiscount = 50;
  const shortRentalDiscount = 20;

  let discount = 0;

  if (days >= 7) {
    discount = longRentalDiscount;
  } else if (days >= 3) {
    discount = shortRentalDiscount;
  }

  return rentalCost - discount;
}

module.exports = calculateRentalCost;
