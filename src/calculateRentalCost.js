/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let costCalc = days * pricePerDay;
  const longTerm = 7;
  const shortTerm = 3;
  const discountLong = 50;
  const discountShort = 20;

  if (days >= longTerm) {
    costCalc -= discountLong;
  } else if (days >= shortTerm) {
    costCalc -= discountShort;
  }

  return costCalc;
}
module.exports = calculateRentalCost;
