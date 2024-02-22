/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const averageDiscount = 20;
  const fullDiscount = 50;

  const totalAmount = dayCost * days;

  switch (true) {
    case (days >= 7):
      return totalAmount - fullDiscount;

    case (days >= 3):
      return totalAmount - averageDiscount;

    default:
      return totalAmount;
  }
}

module.exports = calculateRentalCost;
