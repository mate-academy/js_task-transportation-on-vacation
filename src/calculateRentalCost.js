/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const smallDiscount = 20;
  const largeDiscount = 50;
  const costWithoutDiscount = dayCost * days;

  if (days < 3) {
    return costWithoutDiscount;
  }

  if (days < 7) {
    return costWithoutDiscount - smallDiscount;
  }

  if (days >= 7) {
    return costWithoutDiscount - largeDiscount;
  }
}

module.exports = calculateRentalCost;
