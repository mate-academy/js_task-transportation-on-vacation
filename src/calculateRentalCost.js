/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const pricePerDays = days * basePrice;

  if (days >= 7) {
    return pricePerDays - 50;
  } else if (days >= 3 && days <= 6) {
    return pricePerDays - 20;
  }

  return pricePerDays;
}

module.exports = calculateRentalCost;
