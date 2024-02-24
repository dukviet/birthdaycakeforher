function createCandles() {
    var candles = document.getElementById("candles").value;
    var cake = document.getElementById("cake");
    cake.innerHTML = "";
    for (var i = 0; i < candles; i++) {
      var candle = document.createElement("div");
      candle.className = "candle";
      cake.appendChild(candle);
    }
  }