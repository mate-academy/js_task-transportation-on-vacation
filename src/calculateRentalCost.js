/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const basicDiscount = 20;
  const maxDiscount = 50;
  const daysForBasicDiscount = 3;
  const daysForMaxDiscount = 7;
  const totalAmount = rent * days;

  if (days >= daysForBasicDiscount & days < daysForMaxDiscount) {
    return totalAmount - basicDiscount;
  }

  if (days >= daysForMaxDiscount) {
    return totalAmount - maxDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
