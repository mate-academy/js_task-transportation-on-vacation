/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costFor1Day = 40;
  const discountFor7Days = 50;
  const discountFor3Days = 20;

  switch (true) {
    case days >= 7:
      return days * costFor1Day - discountFor7Days;
    case days >= 3:
      return days * costFor1Day - discountFor3Days;
    default:
      return days * costFor1Day;
  }
}

module.exports = calculateRentalCost;
