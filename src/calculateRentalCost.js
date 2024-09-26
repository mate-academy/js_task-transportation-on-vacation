/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cost;
  const rentalPay = 40;
  const discountZone1 = 20;
  const discountZone2 = 50;

  if (days >= 7) {
    cost = (days * rentalPay) - discountZone2;
  } else if (days < 7 && days >= 3) {
    cost = (days * rentalPay) - discountZone1;
  } else {
    cost = (days * rentalPay);
  }

  return cost;
}

module.exports = calculateRentalCost;
