/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const disc3 = 20;
  const disc7 = 50;

  if (days < 3) {
    return days * price;
  }

  if (days >= 3 && days < 7) {
    return days * price - disc3;
  }

  return days * price - disc7;
}

module.exports = calculateRentalCost;
