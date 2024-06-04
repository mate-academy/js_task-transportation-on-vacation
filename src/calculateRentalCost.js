/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const dailyRentalRate = 40;
  const longTermMinDays = 7;
  const longTermDiscount = 50;
  const shortTermMinDays = 3;
  const shortTermDiscount = 20;

  let price = numberOfDays * dailyRentalRate;

  if(numberOfDays >= longTermMinDays) {
    return price - longTermDiscount;
  }

  if(numberOfDays >=  shortTermMinDays) {
    return price - shortTermDiscount;
  }
  
  return price;
}

module.exports = calculateRentalCost;
