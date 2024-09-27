/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  switch (true) {
    case (days >= 7): return (days * 40) - 50;
    case (days >= 3): return (days * 40) - 20;
    default: return days * 40;
  }
}

module.exports = calculateRentalCost;
