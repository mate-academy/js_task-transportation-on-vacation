/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const LONG_TERM_DISCOUNT = 50;
  const SHIRT_TERM_DISCOUNT = 20;
  const PRICE = 40;

  if (days >= 7) {
    for (let i = 0; i < days; i++) {
      totalCost += PRICE;
    }

    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    for (let i = 0; i < days; i++) {
      totalCost += PRICE;
    }

    return totalCost - SHIRT_TERM_DISCOUNT;
  }

  for (let i = 0; i < days; i++) {
    totalCost += PRICE;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
