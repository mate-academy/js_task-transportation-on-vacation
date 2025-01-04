/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40 * days;

  switch (true) {
    case days < 3:
      return cost;
    case days < 7:
      return cost - 20;
    case days >= 7:
      return cost - 50;
  }
}

module.exports = calculateRentalCost;
