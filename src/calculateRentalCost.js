/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const totalCost = days * price;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  if (days >= 3 & days < 7) {
    return totalCost - threeDaysDiscount;
  } else if (days >= 7) {
    return totalCost - sevenDaysDiscount;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
