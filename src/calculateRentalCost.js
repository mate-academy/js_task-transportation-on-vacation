/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayPrice = 40;
  let fullPrice = days * oneDayPrice;

  if (days >= 7) {
    fullPrice -= 50;
  } else if (days >= 3) {
    fullPrice -= 20;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
