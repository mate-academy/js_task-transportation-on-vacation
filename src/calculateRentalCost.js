/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  switch (true) {
    case (days < 3 && days > 0):
      return days * 40;
    case (days <= 6):
      return days * 40 - 20;
    case (days > 6):
      return days * 40 - 50;
    default:
      return 'Wrong value!';
  }
}

module.exports = calculateRentalCost;
