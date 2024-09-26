/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const period = 40 * days;

  if (days >= 7) {
    return (period - 50);
  }

  if (days < 3 && days > 0) {
    return period;
  } else {
    return (period - 20);
  };
};

module.exports = calculateRentalCost;
