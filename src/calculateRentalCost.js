/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const payment = 40;
  const discontPerThirdDay = 20;
  const discontPerFifthDay = 50;
  const longDay = 7;
  const shortDay = 3;

  if (days >= longDay) {
    return days * payment - discontPerFifthDay;
  }

  if (days >= shortDay) {
    return days * payment - discontPerThirdDay;
  }

  return days * payment;
}

module.exports = calculateRentalCost;
