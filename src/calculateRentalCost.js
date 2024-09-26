/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total;
  const longTimeRent = 7;
  const middleTimeRent = 3;
  const baseRentPrice = 40;
  const longTimeDiscount = 50;
  const threeDaysDiscount = 20;

  if (days >= longTimeRent) {
    total = days * baseRentPrice - longTimeDiscount;
  } else if (days >= middleTimeRent) {
    total = days * baseRentPrice - threeDaysDiscount;
  } else {
    total = days * baseRentPrice;
  }

  return total;
}

module.exports = calculateRentalCost;
