/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const countRent = 40;
  let allPrice = 0;

  if (days >= 7) {
    allPrice = (countRent * days) - 50;
  } else if (days >= 3) {
    allPrice = (countRent * days) - 20;
  } else {
    allPrice = (countRent * days);
  }

  return allPrice;
}

module.exports = calculateRentalCost;
