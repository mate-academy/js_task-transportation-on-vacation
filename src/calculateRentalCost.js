/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayCost = 40;
  const discountForSevenMoreDays = 50;
  const discountForThreeMoreDays = 20;

  if (days < 3) {
    return days * everyDayCost;
  } else if (days >= 3 && days < 7) {
    return days * everyDayCost - discountForThreeMoreDays;
  }

  return days * everyDayCost - discountForSevenMoreDays;
}

module.exports = calculateRentalCost;
