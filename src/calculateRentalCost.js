/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ppd = 40;
  let hm = ppd * days;

  if (days >= 7) {
    hm -= 50;
  } else if (days >= 3) {
    hm -= 20;
  }

  return hm;
}

module.exports = calculateRentalCost;
