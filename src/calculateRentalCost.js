/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;
  const rent = 40;

  if (days >= 7) {
    total = rent * days - 50;
  }

  if (days >= 3 && days < 7) {
    total = rent * days - 20;
  }

  if (days < 3) {
    total = rent * days;
  }

  return total;
}

module.exports = calculateRentalCost;
