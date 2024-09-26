/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const priceForOneDay = 40;
  const priceOffForRentMoreThan3Days = 20;
  const priceOffForRentMoreThan7Days = 50;
  const shortTerm = 3;
  const longTerm = 7;

  const totalSumForRent = priceForOneDay * Number(days);

  if (days >= longTerm) {
    return totalSumForRent - priceOffForRentMoreThan7Days;
  }

  if (days >= shortTerm) {
    return totalSumForRent - priceOffForRentMoreThan3Days;
  }

  return totalSumForRent;
}

module.exports = calculateRentalCost;
