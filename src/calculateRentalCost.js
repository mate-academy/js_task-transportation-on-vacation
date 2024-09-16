/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  if (days < 3) {
    return days * totalCost;
  } else if (days >= 3 && days < 7) {
    return days * totalCost - threeDaysDiscount;
  }

  return days * totalCost - sevenDaysDiscount;
}

module.exports = calculateRentalCost;
