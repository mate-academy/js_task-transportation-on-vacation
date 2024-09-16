/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const arend = days * 40;

  if (days < 3) {
    return arend;
  };

  if (days >= 3 && days <= 6) {
    return arend - 20;
  };

  if (days >= 7) {
    return arend - 50;
  };
}

module.exports = calculateRentalCost;
