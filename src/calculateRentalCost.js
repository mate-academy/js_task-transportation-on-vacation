/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalDayPrice = 40;

  if (days >= 3 && days <= 6) {
    return rentalDayPrice * days - 20;
  } else if (days >= 7) {
    return rentalDayPrice * days - 50;
  }

  return rentalDayPrice * days;
}

module.exports = calculateRentalCost;
