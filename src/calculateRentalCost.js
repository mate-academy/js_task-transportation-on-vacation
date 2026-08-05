/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rental = 40;
  const sum = rental * days;
  let result = 0;

  if (days >= 3 && days < 7) {
    result = sum - 20;
  } else if (days >= 7) {
    result = sum - 50;
  } else {
    result = sum;
  }

  return result;
}

module.exports = calculateRentalCost;
