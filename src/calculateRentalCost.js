/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
  let finalPay = days * 40;

  if (days < 7 && days >= 3) {
    discount = 20;
  } else if (days >= 7) {
    discount = 50;
  }

  if (discount) {
    finalPay = finalPay - discount;
  }

  return finalPay;
}

module.exports = calculateRentalCost;
