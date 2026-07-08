import fakeStockAPI from "./fakeStockAPI.js";

let previousPrice = null;

function renderStockTicker(stockData) {
  const { name, sym, price, time } = stockData;

  document.getElementById("name").innerText = name;
  document.getElementById("symbol").innerText = sym;
  document.getElementById("price").innerText = price;
  document.getElementById("time").innerText = stockData.time;

  const stockDisplayPriceIcon = document.getElementById("price-icon");

  if (previousPrice !== null) {
    if (price > previousPrice) {
      stockDisplayPriceIcon.innerHTML = '<img src="svg/green.svg">';
    } else if (price < previousPrice) {
      stockDisplayPriceIcon.innerHTML = '<img src="svg/red.svg">';
    } else {
      stockDisplayPriceIcon.innerHTML = '<img src="svg/grey.svg">';
    }
  }
  previousPrice = price;
}

function updateStockTicker() {
  const stockData = fakeStockAPI.getStockData();
  renderStockTicker(stockData);
}

//Run immediately
updateStockTicker();

//Then run every 5 seconds
//setInterval(updateStockTicker, 2000);
