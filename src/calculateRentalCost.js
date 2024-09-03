/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortRenatalPeriod = 3;
  const longRentalPeriod = 7;
  const pricePerDay = 40;
  const discountShort = 20;
  const discountLong = 50;

  if (days >= longRentalPeriod) {
    return days * pricePerDay - discountLong;
  }

  if (days >= shortRenatalPeriod) {
    return days * pricePerDay - discountShort;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
