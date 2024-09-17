/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;
  const rentPerDay = days * 40;
  const rentThreeMoreDays = rentPerDay - 20;
  const rentSevenDays = rentPerDay - 50;

  if (days < 7) {
    totalAmount = rentPerDay;
  };

  if (days >= 3) {
    totalAmount = rentThreeMoreDays;
  };

  if (days >= 7) {
    totalAmount = rentSevenDays;
  };

  return totalAmount;
}

module.exports = calculateRentalCost;
