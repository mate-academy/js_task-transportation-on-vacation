/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCostPerDay = 40;
  const mediumRentTermDiscount = 20;
  const longRentTermDiscount = 50;

  if (days < 3) {
    return carCostPerDay * days;
  } else if (days > 2 && days < 7) {
    return carCostPerDay * days - mediumRentTermDiscount;
  } else if (days > 6) {
    return carCostPerDay * days - longRentTermDiscount;
  }
}

module.exports = calculateRentalCost;
