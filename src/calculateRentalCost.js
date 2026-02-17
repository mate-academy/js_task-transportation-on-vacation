/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  let sumCost = 0;

  if (days <= 2) {
    sumCost = dayCost * days;

    return sumCost;
  }

  if (days >= 7) {
    sumCost = dayCost * days - 50;

    return sumCost;
  }

  if (days >= 3) {
    sumCost = dayCost * days - 20;

    return sumCost;
  }
}

module.exports = calculateRentalCost;
