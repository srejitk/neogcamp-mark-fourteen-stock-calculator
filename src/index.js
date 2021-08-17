import "./styles.css";

var buy_Price = document.querySelector("#buy_price");
var buy_Qty = document.querySelector("#buy_qty");
var sell_Price = document.querySelector("#sell_price");
var chkBtn = document.querySelector("#chk_btn");
var output = document.querySelector("#output-id");

var gif_sad = document.querySelector("#gif-sad");
var gif_happy = document.querySelector("#gif-happy");
var gif_meh = document.querySelector("#gif-meh");
var gif_sigh = document.querySelector("#gif-sigh");

chkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var ip = buy_Price.value;
  var qty = buy_Qty.value;
  var sp = sell_Price.value;
  if ((ip > 0) & (qty > 0) & (sp > 0)) {
    calculateReturns(ip, qty, sp);
  } else {
    output.innerText = `Risk hai toh Ishq hai.\n Enter valid values first Mr.Buffet.`;
    gif_sigh.style.display = "block";
    gif_sad.style.display = "none";
    gif_happy.style.display = "none";
    gif_meh.style.display = "none";
  }
}

function calculateReturns(initial, qty, current) {
  var buy = initial;
  var share_qty = qty;
  var sell = current;

  if (buy > sell) {
    var loss = (buy - sell) * share_qty;
    var loss_perc = ((loss * 100) / buy).toFixed(2);
    output.innerText = `Ouch! You made a loss of ${loss}, that's ${loss_perc}%.`;
    gif_sad.style.display = "block";
    gif_happy.style.display = "none";
    gif_meh.style.display = "none";
    gif_sigh.style.display = "none";

    if (loss_perc > 50) {
    }
  } else if (sell > buy) {
    var profit = (sell - buy) * share_qty;
    var profit_perc = ((profit * 100) / buy).toFixed(2);
    output.innerText = `Ouch! You made a profit of ${profit}, that's ${profit_perc}%.`;
    gif_sad.style.display = "none";
    gif_happy.style.display = "block";
    gif_meh.style.display = "none";
    gif_sigh.style.display = "none";
  } else {
    output.innerText = `Okay, Who asked you to invest in nothingness?`;
    gif_sad.style.display = "none";
    gif_happy.style.display = "none";
    gif_meh.style.display = "none";
    gif_sigh.style.display = "block";
  }
}
