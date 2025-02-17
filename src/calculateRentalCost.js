/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const perDayCost = 40
  const sevenDayDiscount = 50
  const threeDayDiscount = 20
  if (days >= 7) {
    return days * perDayCost - sevenDayDiscount;
  } else if (days >= 3) {
    return days * perDayCost - threeDayDiscount;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
