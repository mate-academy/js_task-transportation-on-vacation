/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costRentPerDay = 40;
  const totalRent = costRentPerDay * days;
  const minDiscount = 20;
  const maxDiscount = 50;

  if (days > 6) {
    return totalRent - maxDiscount;
  }

  if (days > 2) {
    return totalRent - minDiscount;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
