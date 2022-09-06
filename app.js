function ticketManager(ticket, setValue) {
    const ticketInput = document.getElementById(ticket + "-input");
    const ticketCount = parseInt(ticketInput.value);

    if(setValue == false && ticketCount > 0){ticketNewCount = ticketCount - 1};
    if(setValue == true){ticketNewCount = ticketCount + 1};
    ticketInput.value = ticketNewCount;

    let ticketTotal = 0;
    if(ticket == "firstClass"){ ticketTotal = ticketNewCount * 150};
    if(ticket == "economicClass"){ ticketTotal = ticketNewCount * 100};
    calculateTotal();
} 


// calculate area
function calculateTotal(){
    const firstClassInput = document.getElementById('firstClass-input');
    const firstClassCount = parseInt(firstClassInput.value);

    const economicClassInput = document.getElementById("economicClass-input");
    const economicClassCount = parseInt(economicClassInput.value);

    const subTotalPrice =firstClassCount * 150 + economicClassCount * 100;
    document.getElementById("subTotalPrice").innerText = "$" + subTotalPrice;

    const vat = Math.round(subTotalPrice * 0.1);
    document.getElementById("vat-amount").innerText = "$" + vat;

    const totalPrice = subTotalPrice + vat;
    document.getElementById("totalPrice").innerText = "$" + totalPrice;
}
function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}




//boughtTicket


function print_ticket(){
    window.location="boughtTicket.html";
}
