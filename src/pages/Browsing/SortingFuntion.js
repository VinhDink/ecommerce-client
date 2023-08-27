let rangeslider = document.getElementById("customRange");
let rangeoutput = document.getElementById("displayRange");
rangeoutput.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
    rangeoutput.innerHTML = this.value;
}