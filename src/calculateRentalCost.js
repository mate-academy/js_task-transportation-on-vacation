/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalDayCost = 40;
  const staticCost = rentalDayCost * days;
  const basicDiscont = 20;
  const extraDiscont = 50;

  switch (true) {
    case days < 3:
      return staticCost;

    case days < 7:
      return staticCost - basicDiscont;
  }

  return staticCost - extraDiscont;
}

module.exports = calculateRentalCost;
