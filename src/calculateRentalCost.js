/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let x = 40;

  if (days < 3) {
    return x * days;
  } else if (days >= 3 && days < 7) {
    return x * days - 20;
  } else {
    return x * days - 50;
  }
}

module.exports = calculateRentalCost;
