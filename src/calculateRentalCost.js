/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountForWeek = 50;
  const discountForThirdDays = 20;
  const dayCost = 40;

  if (days < 3) {
    return days * dayCost;
  }

  if (days >= 3 && days < 7) {
    return (days * dayCost) - discountForThirdDays;
  }

  return (days * dayCost) - discountForWeek;
}

module.exports = calculateRentalCost;
