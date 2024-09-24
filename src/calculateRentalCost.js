/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DayRent = 40;
  let totalRent = 0;

  totalRent = DayRent * days;

  if (days >= 7) {
    totalRent = DayRent * days - 50;
  }

  if (days >= 3 && days <= 6) {
    totalRent = DayRent * days - 20;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
