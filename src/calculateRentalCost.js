/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayprice = 40;

  if (days >= 3 && days < 7) {
    return dayprice * days - 20;
  }

  if (days >= 7) {
    return dayprice * days - 50;
  }

  return dayprice * days;
}

module.exports = calculateRentalCost;
