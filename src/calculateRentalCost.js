/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (!Number.isInteger(days)) {
    throw new Error('Invalid value');
  }

  const totalPay = days * 40;
  let discount;

  if (days >= 3 && days < 7) {
    discount = 20;
  } else if (days >= 7) {
    discount = 50;
  }

  let result;

  if (days > 2) {
    result = totalPay - discount;
  }

  if (days <= 2) {
    result = totalPay;
  }

  return result;
}

module.exports = calculateRentalCost;
