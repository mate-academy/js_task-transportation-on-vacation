/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;
  const totalCost = days * costPerDay;
  if (days >= 7) {
    return totalCost - sevenDaysDiscount;
  } else if (days >= 3) {
    return totalCost - threeDaysDiscount;
  } else if (days < 3) {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
