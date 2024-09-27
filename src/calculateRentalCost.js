/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  switch (true) {
    case days >= 3 && days < 7:
      return 40 * days - 20;
    case days >= 7:
      return 40 * days - 50;
    default:
      return 40 * days;
  }
}

module.exports = calculateRentalCost;
