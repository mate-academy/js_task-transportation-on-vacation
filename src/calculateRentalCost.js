/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const carFee = 40;
  let total = 0;

  if (days >= 7) {
    total = carFee * days;

    return total - 50;
  } else if (days >= 3) {
    return carFee * days - 20;
  }

  return carFee * days;
}

module.exports = calculateRentalCost;
