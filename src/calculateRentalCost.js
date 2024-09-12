/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  const totalCost = days * oneDayCost;

  if (days >= 7) {
    return totalCost - sevenDaysDiscount;
  } else if (days >= 3) {
    return totalCost - threeDaysDiscount;
  }
  return days * oneDayCost;
}

module.exports = calculateRentalCost;
