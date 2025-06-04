/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const priceAllDays = priceForDay * days;

  if (days < 3) {
    return priceAllDays;
  } else if (days >= 3 && days < 7) {
    return priceAllDays - 20;
  }

  return priceAllDays - 50;
}

module.exports = calculateRentalCost;
