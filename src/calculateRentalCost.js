/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40 * days;

  switch (true) {
    case days >= 3 && days < 7: {
      return rentalCost - 20;
    }

    case days >= 7: {
      return rentalCost - 50;
    }
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
