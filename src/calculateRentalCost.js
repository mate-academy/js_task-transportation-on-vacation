/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const totalToPay = rentCost * days;

  if (days >= 7) {
    const discount = 50;

    return totalToPay - discount;
  }

  if (days >= 3) {
    const discount = 20;

    return totalToPay - discount;
  }

  return totalToPay;
}

module.exports = calculateRentalCost;
