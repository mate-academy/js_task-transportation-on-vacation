/**
 * @param {number} days
 *
 * @return {number}
 */
const defaultPrice = 40;

function calculateRentalCost(days) {
  let totalPrice = 0;

  if (days >= 7) {
    return (totalPrice += defaultPrice * days - 50);
  } else if (days >= 3) {
    return (totalPrice += defaultPrice * days - 20);
  } else {
    return (totalPrice += defaultPrice * days);
  }
}

module.exports = calculateRentalCost;
