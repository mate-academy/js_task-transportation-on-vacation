/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForRent = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;
  const daysForSmallDiscount = 3;
  const daysForLargeDiscount = 7;

  let total = days * priceForRent;

  if (days >= daysForSmallDiscount && days < daysForLargeDiscount) {
    total -= smallDiscount;
  } else if (days >= daysForLargeDiscount) {
    total -= largeDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
