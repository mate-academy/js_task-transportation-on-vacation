/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const smallCashBack = 20;
  const normalCashBack = 50;

  if (days < 3) {
    return rent * days;
  }

  if (days < 7) {
    return rent * days - smallCashBack;
  }

  return rent * days - normalCashBack;
}

module.exports = calculateRentalCost;
