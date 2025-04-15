/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentPrice = 40;

  const rentDiscounts = [
    {
      daysRequired: 7,
      discountAmount: 50,
    },
    {
      daysRequired: 3,
      discountAmount: 20,
    },
  ];

  const totalAmount = days * dailyRentPrice;

  for (const { daysRequired, discountAmount } of rentDiscounts) {
    if (days >= daysRequired) {
      return totalAmount - discountAmount;
    }
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
