/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const BigDiscount = 50;
  const SmallDiscount = 20;

  if (days < 3) {
    return days * DAY_RENT;
  } else if (days >= 3 && days < 7) {
    return days * DAY_RENT - SmallDiscount;
  }

  return days * DAY_RENT - BigDiscount;
}
module.exports = calculateRentalCost;
