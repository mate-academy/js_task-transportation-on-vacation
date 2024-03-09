/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDaycost = 40;
  const sevenDaysDiscount = 50;
  const threeDayDiscount = 20;

  if (days < 3) {
    return days * oneDaycost;
  } else if (days >= 3 && days < 7) {
    return days * oneDaycost - threeDayDiscount;
  }

  return days * oneDaycost - sevenDaysDiscount;
}

module.exports = calculateRentalCost;
