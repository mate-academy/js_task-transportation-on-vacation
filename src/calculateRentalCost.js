/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const dailyCost = 40;
  const totalAmount = days * dailyCost;

  switch (true) {
    case days >= 7:
      return totalAmount - 50;

    case days >= 3:
      return totalAmount - 20;

    default:
      return totalAmount;
  }
}

module.exports = calculateRentalCost;
