/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  let result = 0;

  if (days < 7 && days >= 3) {
    result = carCost * days - 20;
  } else if (days >= 7) {
    result = carCost * days - 50;
  } else {
    result = carCost * days;
  }

  return result;
}

module.exports = calculateRentalCost;
