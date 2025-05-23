/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;
  let total = carRent * days;

  if (days >= 7) {
    total -= 50;

    return total;
  } else if (days >= 3) {
    total -= 20;

    return total;
  } else {
    return total;
  }
}

module.exports = calculateRentalCost;
