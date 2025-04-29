/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let price = days * 40;

  switch (true) {
    case days >= 3 && days < 7: {
      price -= 20;
      break;
    }

    case days >= 7: {
      price -= 50;
      break;
    }
  }

  return price;
}

module.exports = calculateRentalCost;
