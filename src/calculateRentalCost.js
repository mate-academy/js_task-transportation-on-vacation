/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  if (days < 3) {
    return price;
  }

  if (days >= 3 && days < 7) {
    return price - threeDaysDiscount;
  }

  if (days >= 7) {
    return price - sevenDaysDiscount;
  }
}

module.exports = calculateRentalCost;
