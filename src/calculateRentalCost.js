/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const basicDiscount = 50;
  const initialDiscaunt = 20;
  const amount = days * price;

  if (days < 3) {
    return amount;
  }

  if (days < 7) {
    return amount - initialDiscaunt;
  }

  return amount - basicDiscount;
}

module.exports = calculateRentalCost;
