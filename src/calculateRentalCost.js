/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const minRentCost = 40;
  const threeDayDisc = 20;
  const sevenDayDisc = 50;

  let totalCost = 0;

  switch (true) {
    case days >= 7:
      totalCost = minRentCost * days - sevenDayDisc;
      break;

    case days >= 3:
      totalCost = minRentCost * days - threeDayDisc;
      break;

    default:
      totalCost = minRentCost * days;
      break;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
