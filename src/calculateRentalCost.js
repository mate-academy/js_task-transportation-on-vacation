/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRentalForDay = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;

  let totalAmount = 0;

  if (days <= 2) {
    for (let i = 0; i < days; i++) {
      totalAmount += carRentalForDay;
    }
  }

  if (days >= 3 && days < 7) {
    for (let i = 0; i < days; i++) {
      totalAmount += carRentalForDay;
    }

    totalAmount -= smallDiscount;
  }

  if (days >= 7) {
    for (let i = 0; i < days; i++) {
      totalAmount += carRentalForDay;
    }

    totalAmount -= largeDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
