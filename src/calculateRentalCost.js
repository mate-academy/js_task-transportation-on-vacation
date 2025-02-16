/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscount = 20;
  const smallDiscountDays = 3;
  const hugeDiscount = 50;
  const hugeDiscountDays = 7;
  const dailyRent = 40;

  if (days < smallDiscountDays) {
    return dailyRent * days;
  }

  if (days >= smallDiscountDays && days < hugeDiscountDays) {
    return (dailyRent * days) - smallDiscount;
  }

  if (days >= hugeDiscountDays) {
    return (dailyRent * days) - hugeDiscount;
  }
}

module.exports = calculateRentalCost;
