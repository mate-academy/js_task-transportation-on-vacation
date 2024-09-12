/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTherm = 7;
  const longThermDiscount = 50;
  const autoCosts = 40;
  const shortTherm = 3;
  const shortThermDiscount = 20;

  if (days >= longTherm) {
    return days * autoCosts - longThermDiscount;
  }

  if (days >= shortTherm) {
    return days * autoCosts - shortThermDiscount;
  }

  return days * autoCosts;
}

module.exports = calculateRentalCost;
