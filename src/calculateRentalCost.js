/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 1;
  const middleTerm = 3;
  const longTerm = 7;

  const price = 40;
  const middleDisscount = 20;
  const longDisscount = 50;

  if (days >= longTerm) {
    return price * days - longDisscount;
  }

  if (days >= middleTerm) {
    return price * days - middleDisscount;
  }

  if (days >= shortTerm) {
    return price * days;
  }
}

module.exports = calculateRentalCost;
