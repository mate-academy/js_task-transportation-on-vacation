/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPrice = 40;
  const discountFor3OrMostday = 20;
  const discountFor7OrMostday = 50;
  const rentalDayForDiscount20 = 3;
  const rentalDayForDiscount50 = 7;

  const rentalSum = rentalPrice * days;

  if (days >= rentalDayForDiscount50) {
    return rentalSum - discountFor7OrMostday;
  }

  if (days >= rentalDayForDiscount20) {
    return rentalSum - discountFor3OrMostday;
  }

  return rentalSum;
}

module.exports = calculateRentalCost;
