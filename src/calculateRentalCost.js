/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPrice = 40;
  const longRentDiscount = 50;
  const shortRentDiscount = 20;
  const longRentDaysCount = 7;
  const shortRentDaysCount = 3;

  if (days >= longRentDaysCount) {
    return days * rentPrice - longRentDiscount;
  }

  if (days < longRentDaysCount && days >= shortRentDaysCount) {
    return days * rentPrice - shortRentDiscount;
  }

  return days * rentPrice;
}

module.exports = calculateRentalCost;
