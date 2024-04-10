/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const threeDaysOff = 20;
  const sevenDaysOff = 50;
  const totalPayment = days * dailyRent;

  switch (true) {
    case days >= 7:
      return totalPayment - sevenDaysOff;

    case days >= 3:
      return totalPayment - threeDaysOff;

    default:
      return totalPayment;
  }
}

module.exports = calculateRentalCost;
