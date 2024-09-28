/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const isDiscontWork = days >= 3;
  let discont = 0;

  if (isDiscontWork) {
    discont = days < 7 ? 20 : 50;
  }

  return days * dayRent - discont;
}

module.exports = calculateRentalCost;
