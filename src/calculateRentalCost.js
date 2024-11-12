/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  let sumCost = dayCost * days;

  if (days >= 7) {
    sumCost -= 50;
  } else if (days >= 3 && days < 7) {
    sumCost -= 20;
  }

  return sumCost;
}

module.exports = calculateRentalCost;
