/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = 40;
  const sumPay = totalCost * days;

  const discount7 = 50;
  const discount3 = 20;

  if (days >= 7) {
    return sumPay - discount7;
  } else if (days >= 3) {
    return sumPay - discount3;
  }

  return sumPay;
}

module.exports = calculateRentalCost;
