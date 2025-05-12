/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const valueDay = 40;

  let valueTotal = days * valueDay;
  let desc = 0;

  if (days >= 3 && days < 7) {
    desc = 20;
  } else if (days >= 7) {
    desc = 50;
  }

  valueTotal -= desc;

  return valueTotal;
}

module.exports = calculateRentalCost;
