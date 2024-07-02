/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRentPerDay = 40;
  const saleForWeekAndMore = 50;
  const saleForShortTerm = 20;
  let totalSum = carRentPerDay * days;

  if (days >= 7) {
    totalSum = days * carRentPerDay - saleForWeekAndMore;
  } else if (days >= 3) {
    totalSum = days * carRentPerDay - saleForShortTerm;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
