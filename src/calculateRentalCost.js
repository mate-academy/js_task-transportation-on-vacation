/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let rentalCost = 0;
  let daysCount = 0;
  const firstDiscount = 20;
  const secondDiscount = 50;

  for (let i = 1; i <= days; i++) {
    daysCount++;
  }

  if (daysCount < 3) {
    rentalCost = pricePerDay * daysCount;

    return rentalCost;
  }

  if (daysCount <= 6) {
    rentalCost = pricePerDay * daysCount - firstDiscount;

    return rentalCost;
  }

  rentalCost = pricePerDay * daysCount - secondDiscount;

  return rentalCost;
}

module.exports = calculateRentalCost;
