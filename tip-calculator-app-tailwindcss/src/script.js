var billInput = 0;
var peopleInput = 0;
var tipPercentage;

//Bill input
$("#bill-input").on("input",function(){
    if (this.value && this.value!=0){
        $("#bill-input").removeClass("empty");
        $("p.added-p-tag").remove();
        billInput = this.value;
        calculateTip(billInput,tipPercentage,peopleInput);
    } else{
        $("#bill-input").addClass("empty");
        if (!($("h3.bill").has("p.added-p-tag").length)){
            $("h3.bill").append("<p class='inline-block text-xs self-center added-p-tag'> Field can't be zero!</p>");
        }
    }
})

//People input
$("#people-input").on("input",function(){
    if (this.value && this.value!=0){
        $("#people-input").removeClass("empty");
        $("p.added-p-tag").remove();
        peopleInput = this.value;
        calculateTip(billInput,tipPercentage,peopleInput);
    } else{
        $("#people-input").addClass("empty");
        if (!($("h3.people").has("p.added-p-tag").length)){
            $("h3.people").append("<p class='inline-block text-xs self-center added-p-tag'> Field can't be zero!</p>");
        }
    }
})

//Obtain selected button
$('button.button').on("click", function(){
    $('button.button').removeClass("selected");
    $('#' + this.id).addClass("selected");
    $('input.button').val("");
    tipPercentage = $('#' + this.id).text().slice(0,-1);
    calculateTip(billInput,tipPercentage,peopleInput);
    //alert(tipPercentage);
    //console.log(tipPercentage);
})

//Custom Tip %
$('input.button').change(function(){
    $('button.button').removeClass("selected");
    tipPercentage = $('input.button').val();
    calculateTip(billInput,tipPercentage,peopleInput);
})

$('button.reset').on('click', function(){
    //alert("Bill: " + billInput + " | Tip %: " + tipPercentage + " | No. People: " + peopleInput);
    $('#tip-amount').text("$0.00");
    $('#total-amount').text("$0.00");
    $('#bill-input').val("");
    $('#people-input').val("");
    $('input.button').val("");
    $('button.button').removeClass("selected");
    $("#bill-input").removeClass("empty");
    $("#people-input").removeClass("empty");
    $("p.added-p-tag").remove();
    billInput = 0;
    tipPercentage = 0;
    peopleInput = 0;
})

function calculateTip(bill,tip,people){
    if (bill!=0 && tip!=0 && people!=0){
        let tipAmount = (billInput*(tipPercentage/100))/peopleInput;
        let totalAmount = tipAmount + (billInput/peopleInput);
        $('#tip-amount').text("$" + tipAmount.toFixed(2));
        $('#total-amount').text("$" + totalAmount.toFixed(2));
    }
}