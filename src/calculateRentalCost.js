/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const coast = 40;
  let off = 0;

  if (days < 3) {
    return days * coast;
  } else if (days >= 3 && days < 7) {
    off = 20;

    return days * coast - off;
  } else if (days >= 7) {
    off = 50;

    return days * coast - 50;
  }
}

module.exports = calculateRentalCost;
