/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysCost = days * 40;
  const discount = 20;
  const discount2 = 50;

  if (days < 3) {
    return daysCost;
  }

  if (days >= 3 && days < 7) {
    return daysCost - discount;
  }

  if (days >= 7) {
    return daysCost - discount2;
  }
}

module.exports = calculateRentalCost;
