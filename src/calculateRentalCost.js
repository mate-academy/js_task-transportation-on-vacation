/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const totalPrice = basePrice * days;
  let discount = 0;

  if (days >= 7) {
    discount = 50;

    return totalPrice - discount;
  }

  if (days < 3) {
    return totalPrice - discount;
  }

  discount = 20;

  return totalPrice - discount;
}

module.exports = calculateRentalCost;
