const day = 40;

function calculateRentalCost(days) {
  if (days >= 7) {
    return days * day - 50;
  } else if (days >= 3) {
    return days * day - 20;
  } else {
    return days * day;
  }
}

module.exports = calculateRentalCost;
