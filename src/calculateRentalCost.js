/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCostPerDay = 40;
  const mediumRentTermDiscount = 20;
  const longRentTermDiscount = 50;
  const price = carCostPerDay * days;

  if (days < 3) {
    return price;
  }

  if (days >= 3 && days <= 6) {
    return price - mediumRentTermDiscount;
  }

  if (days >= 7) {
    return price - longRentTermDiscount;
  }
}

module.exports = calculateRentalCost;
