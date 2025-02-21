/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;

  if (days < 3) {
    return days * oneDay;
  } else {
    if (days >= 7) {
      return days * oneDay - 50;
    } else {
      if (days >= 3 && days <= 6) {
        return days * oneDay - 20;
      }
    }
  }
}

module.exports = calculateRentalCost;
