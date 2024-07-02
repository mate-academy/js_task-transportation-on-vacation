/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRentPerDay = 40;
  const saleForWeekAndMore = 50;
  const saleForShortTerm = 20;
  const sevenDaysRent = 7;
  const threeDaysRent = 3;
  let totalSum = carRentPerDay * days;

  if (days >= sevenDaysRent) {
    totalSum = days * carRentPerDay - saleForWeekAndMore;
  } else if (days >= threeDaysRent) {
    totalSum = days * carRentPerDay - saleForShortTerm;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
