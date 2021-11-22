
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    amount = document.getElementById("amount");
    persons = document.getElementById("persons");
    if(amount.value == "" || persons.value == ""){
        alert("please Eter fields");
    }else{
        document.getElementById("output").innerText ="The splited bill is : $" + Math.floor(amount.value/persons.value);
        amount.value = "";
        persons.value = "";
    }
});