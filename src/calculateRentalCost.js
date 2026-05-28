/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = days * 40;

  if (days >= 7) {
    return rent - 50;
  } else if (days >= 3) {
    return rent - 20;
  }

  return rent;
}

module.exports = calculateRentalCost;
