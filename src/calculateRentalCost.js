/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTermOfDays = 7;
  const longRentalDiscount = 50;
  const shortTermOfDays = 3;
  const shortRentalDiscount = 20;

  if (days >= longTermOfDays) {
    return days * pricePerDay - longRentalDiscount;
  } 
  if (days >= shortTermOfDays) {
    return days * pricePerDay - shortRentalDiscount;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
