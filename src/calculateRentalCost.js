/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const calculetedCost = days * 40;

  if (days >= 3 && days < 7) {
    return calculetedCost - 20;
  }

  if (days >= 7) {
    return calculetedCost - 50;
  }

  return calculetedCost;
}

module.exports = calculateRentalCost;
