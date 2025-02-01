/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days <= 0) {
    return 'err...';
  }

  let costVacationCar = 40 * days;

  if (days >= 7) {
    costVacationCar -= 50;
  } else if (days >= 3) {
    costVacationCar -= 20;
  }

  return costVacationCar;
}

module.exports = calculateRentalCost;
