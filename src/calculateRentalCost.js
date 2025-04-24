/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPerOneDay = 40;
  const totalRentPrice = days * rentPerOneDay;

  if (days >= 7) {
    return totalRentPrice - 50;
  } else if (days >= 3 && days < 7) {
    return totalRentPrice - 20;
  } else {
    return totalRentPrice;
  }
}

module.exports = calculateRentalCost;
