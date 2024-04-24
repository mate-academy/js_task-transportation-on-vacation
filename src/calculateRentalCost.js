/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(NumberOfDays) {
  const rentDayPrice = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (NumberOfDays < shortTerm) {
    return rentDayPrice * NumberOfDays;
  }

  if (NumberOfDays < longTerm) {
    return rentDayPrice * NumberOfDays - shortTermDiscount;
  }

  return rentDayPrice * NumberOfDays - longTermDiscount;
}

module.exports = calculateRentalCost;
