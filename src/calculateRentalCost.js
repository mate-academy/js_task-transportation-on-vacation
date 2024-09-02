/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountOfSevenDays = 50;
  const discountOfThreeOrMoreDays = 20;
  const total = days * 40;

  if (days >= 7) {
    return total - discountOfSevenDays;
  }

  if (days >= 3 || days >= 6) {
    return total - discountOfThreeOrMoreDays;
  }

  return 80;
}
module.exports = calculateRentalCost;
