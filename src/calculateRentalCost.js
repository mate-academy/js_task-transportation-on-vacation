/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDaycost = 40;
  const sevenDaysDiscount = 50;
  const threeDayDiscount = 20;
  const threeDaysAmount = 3;
  const sevenDaysAmount = 7;

  if (days < threeDaysAmount) {
    return days * oneDaycost;
  }

  if (days >= threeDaysAmount && days < sevenDaysAmount) {
    return days * oneDaycost - threeDayDiscount;
  }

  return days * oneDaycost - sevenDaysDiscount;
}

module.exports = calculateRentalCost;
