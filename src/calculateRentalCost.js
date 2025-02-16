/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priseOfDay = 40;
  let total = priseOfDay * days;
  const middleTermin = 3;
  const middleTerminDiscount = 20;
  const longTermin = 7;
  const longTerminDiscount = 50;

  if (days >= longTermin) {
    total -= longTerminDiscount;

    return total;
  }

  if (days >= middleTermin) {
    total -= middleTerminDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
