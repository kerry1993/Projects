(function () {
    bindItemPrices();
    setTotalItemCost();
})();

function bindItemPrices(){
    var shirtprice = document.getElementById('shirtprice');
    shirtprice.innerText = "1.80";

    var trouserprice = document.getElementById('trouserprice');
    trouserprice.innerText = "1.20";

    var blouseprice = document.getElementById('blouseprice');
    blouseprice.innerText = "1.60";
    
}

var prices = [1.80, 1.20, 1.60];
function setTotalItemCost() {

    var quantity = document.querySelectorAll('input[type=number]');
    quantity.forEach((element, index) => {
        element.addEventListener('input', (evt) => {
            var quantity = Number.isNaN(parseInt(evt.target.value)) ? 0 : evt.target.value;
            var cost = document.querySelectorAll('input[class=totalCost]');
            cost[index].value = parseFloat(quantity * prices[index]).toFixed(2);

            setGrandTotal(cost);
        });
    })
}

function setGrandTotal(costElements) {
    var grandTotal = 0;
    costElements.forEach(element => {
        if (!Number.isNaN(parseFloat(element.value))) {
            grandTotal += parseFloat(element.value);
        }
    });
    var gt = document.getElementById('grandtotal')
    gt.innerText = new Intl.NumberFormat('en-GB', {currency:'GBP', style:'currency'}).format(grandTotal);
}