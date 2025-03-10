function calculateRentalCost(days) {
  const basePrice = 40; // Cost per day
  let totalCost = days * basePrice; // Calculate base cost

  // Apply flat discounts based on the number of days
  if (days >= 7) {
    totalCost -= 50; // Flat $50 discount for 7+ days
  } else if (days >= 3) {
    totalCost -= 20; // Flat $20 discount for 3–6 days
  }

  return totalCost;
}

module.exports = calculateRentalCost;
