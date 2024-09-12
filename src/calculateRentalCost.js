/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const discount = 20;
  const weekDiscount = 50;

  if (days >= 7) {
    return (dayPrice * days) - weekDiscount;
  }

  if (days >= 3) {
    return (dayPrice * days) - discount;
  }

  return dayPrice * days;
}

module.exports = calculateRentalCost;
