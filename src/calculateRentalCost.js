/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costNoDiscount = days * 40;

  if (days >= 7) {
    return (costNoDiscount - 50);
  }

  if (days >= 3) {
    return (costNoDiscount - 20);
  }

  return costNoDiscount;
}

module.exports = calculateRentalCost;
