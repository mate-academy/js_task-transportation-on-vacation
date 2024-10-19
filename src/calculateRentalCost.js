/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalPrice = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const rentalDays = days;
  const totalCost = dailyRentalPrice * rentalDays;
  let finalCost;

  if (rentalDays < 3) {
    finalCost = totalCost;
  } else if (rentalDays >= 3 && rentalDays < 7) {
    finalCost = totalCost - discountForThreeDays;
  } else if (rentalDays >= 7) {
    finalCost = totalCost - discountForSevenDays;
  }

  return finalCost;
}

module.exports = calculateRentalCost;
