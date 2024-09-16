/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const oneDayPrice = 40;
  const totalPrice = oneDayPrice * days;
  const days3discount = 20;
  const days7discount = 50;
  if (days < 3) {
    return totalPrice;
  } else if (days < 7) {
    return totalPrice - days3discount;
  } else {
    return totalPrice - days7discount;
  }
}

module.exports = calculateRentalCost;
