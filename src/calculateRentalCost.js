/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;

  if (days >= 7) {
    return rent * days - 50;
  }

  if (days >= 3) {
    return rent * days - 20;
  }

  return rent * days;
}

module.exports = calculateRentalCost;
