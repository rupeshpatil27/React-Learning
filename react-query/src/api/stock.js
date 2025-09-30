// Fake API to simulate stock price updates
function getStockPrice() {
  const stockData = [
    { ticker: 'AAPL', price: (Math.random() * (150 - 130) + 130).toFixed(2) },
    { ticker: 'GOOGL', price: (Math.random() * (2800 - 2500) + 2500).toFixed(2) },
    { ticker: 'AMZN', price: (Math.random() * (3500 - 3200) + 3200).toFixed(2) },
  ];

  console.log("first")

  return stockData[Math.floor(Math.random() * stockData.length)];
}

export const fetchStockData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getStockPrice());
    }, 1000); // Simulate network delay
  });
};
