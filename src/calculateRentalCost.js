/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;
  const sevenOrMore = 50;
  const threeOrMore = 20;
  let rentalCost = 0;

  if (days >= 3 && days < 7) {
    rentalCost = totalCost - threeOrMore;

    return rentalCost;
  } else if (days >= 7) {
    rentalCost = totalCost - sevenOrMore;

    return rentalCost;
  } else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
