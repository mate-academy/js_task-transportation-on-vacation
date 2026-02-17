/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  let result = days * pricePerDay;
  const longRentDiscount = 50;
  const mediumRentDiscount = 20;
  const mediumRentDays = 3;
  const longRentDays = 7;

  if (days >= longRentDays) {
    result -= longRentDiscount;
  } else if (days >= mediumRentDays) {
    result -= mediumRentDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
