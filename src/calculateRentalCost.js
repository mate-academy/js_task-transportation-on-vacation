/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const bigOff = 50;
  const smallOff = 20;
  if (days >= 3 && days < 7) {
    return days * cost - smallOff;
  } else if (days >= 7) {
    return days * cost - bigOff;
  }

  return days * cost;
}

module.exports = calculateRentalCost;
