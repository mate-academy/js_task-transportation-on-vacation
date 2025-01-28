/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;

  switch (true) {
    case days < 3:
      return costPerDay * days;
    case days >= 3 && days < 7:
      return costPerDay * days - 20;
    case days >= 7:
      return costPerDay * days - 50;
  }
}

module.exports = calculateRentalCost;
