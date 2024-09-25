/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;
  const oneDayRentCost = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const rentalCost = oneDayRentCost * days;
  const shortTermCost = rentalCost - shortTermDiscount;
  const longTermCost = rentalCost - longTermDiscount;

  if (days < shortTerm) {
    return rentalCost;
  }

  if (days < longTerm) {
    return shortTermCost;
  }

  return longTermCost;
}

module.exports = calculateRentalCost;
