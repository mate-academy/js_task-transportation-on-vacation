function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = dailyRate * days;

  if (days >= 7) {
    totalCost -= 50; // Additional discount for 7 or more days
  } else if (days >= 3) {
    totalCost -= 20; // Basic discount for 3 to 6 days
  }

  return totalCost;
}

console.log(calculateRentalCost(5));
