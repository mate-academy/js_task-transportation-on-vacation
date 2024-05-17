/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDays = 7;
  const shortTermDays = 3;
  const carCostPerDay = 40;
  const mediumRentTermDiscount = 20;
  const longRentTermDiscount = 50;
  const price = carCostPerDay * days;

  if (days >= longTermDays) {
    return price - longRentTermDiscount;
  }

  if (days >= shortTermDays) {
    return price - mediumRentTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
