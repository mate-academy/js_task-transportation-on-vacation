/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = 40;
  const bigSale = 50;
  const smallSale = 20;
  let result = 0;

  if (days >= 7) {
    result = totalCost * days - bigSale;
  } else if (days < 7) {
    result = totalCost * days - smallSale;
  }

  if (days < 3) {
    result = totalCost * days;
  }

  return result;
}

module.exports = calculateRentalCost;
